import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Proident nostrud consequat exercitation culpa amet nostrud adipisicing
          excepteur ullamco mollit.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="brands we work together"
            fill
            className={styles.brandsImage}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image alt="image" src="/hero.gif" fill className={styles.heroImage} />
      </div>
    </div>
  );
}
