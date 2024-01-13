import PostCard from "@/components/postCard/PostCard";
import styles from "./page.module.css";
// import { getPosts } from "@/lib/data";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

export const metadata = {
  title: "Blog Crow",
  description: "Developed by Crow",
};

export default async function Blog() {
  const posts = await getData();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post}>
          <PostCard post={post} key={post._id} />
        </div>
      ))}
    </div>
  );
}
