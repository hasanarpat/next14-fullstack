import Links from "./links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link className={styles.logo} href="/">
        crowdev
      </Link>
      <div>
        <Links />
      </div>
    </nav>
  );
};

export default Navbar;
