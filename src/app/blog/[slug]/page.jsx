import styles from "./page.module.css";
import Image from "next/image";
export default function SingleBlog() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          alt="banner"
          src="https://images.pexels.com/photos/19298991/pexels-photo-19298991/free-photo-of-cowboy-on-a-field.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>

        <div className={styles.detail}>
          <Image
            alt="avatar"
            src="https://images.pexels.com/photos/19298991/pexels-photo-19298991/free-photo-of-cowboy-on-a-field.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.authorDetail}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jeferson</span>
          </div>
          <div className={styles.authorDetail}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          <p>
            Non officia culpa et in exercitation duis amet dolore commodo cillum
            voluptate occaecat qui exercitation. Ipsum laboris veniam duis
            laborum mollit ea tempor ex labore. Nostrud sunt consectetur aliquip
            deserunt nostrud fugiat. Commodo ut est anim commodo irure duis
            minim. Culpa consectetur quis proident in cupidatat excepteur et
            officia quis elit qui tempor culpa. Veniam laboris quis
            reprehenderit anim non labore exercitation elit amet cillum. Sit
            minim id esse irure pariatur in Lorem et non consequat magna qui
            laboris.
          </p>
        </div>
      </div>
    </div>
  );
}
