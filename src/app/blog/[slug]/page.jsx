import PostUser from "@/components/postUser/PostUser";
import styles from "./page.module.css";
import Image from "next/image";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.heading,
    description: post.desc,
  };
};

export default async function SingleBlog({ params }) {
  const { slug } = params;
  const post = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image alt="banner" src={post.img} fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          {post.heading ? post.heading : "Hello World"}
        </h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading ...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.authorDetail}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt
                ? post.createdAt.toString().slice(4, 16)
                : "02 June 2023"}
            </span>
          </div>
        </div>
        <div className={styles.content}>
          <p>{post.desc}</p>
        </div>
      </div>
    </div>
  );
}
