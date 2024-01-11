import Image from "next/image";
import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          Sint reprehenderit pariatur id veniam laborum nostrud ipsum amet culpa
          anim magna laboris. Do sunt quis consequat enim. Ut est do dolor
          velit. Consequat nisi culpa aute ea exercitation aliquip eu est sint
          proident commodo eiusmod. Cillum eu ipsum ullamco occaecat commodo
          nostrud laborum reprehenderit voluptate aute commodo.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K</h1>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/about.png"
          alt="about image"
          fill
          className={styles.image}
        />
      </div>
    </div>
  );
}
