import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";

import Image from "next/image";
// const getData = async (id) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

const PostUser = async ({ userId }) => {
  //   const user = await getData(userId);
  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <Image
        alt="avatar"
        src={user.img ? user.img : "/noavatar.png"}
        width={50}
        height={50}
        className={styles.avatar}
      />
      <div className={styles.info}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
