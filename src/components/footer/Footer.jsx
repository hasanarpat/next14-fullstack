import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>crowdev</div>
      <div className={styles.text}>
        Crow creative thoghts agency © All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
