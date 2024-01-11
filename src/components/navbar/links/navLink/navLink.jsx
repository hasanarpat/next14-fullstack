"use client";
import { usePathname } from "next/navigation";
import styles from "./navlink.module.css";
import Link from "next/link";

const NavLink = ({ link, setOpenMenu }) => {
  const pathName = usePathname();

  return (
    <Link
      href={link.path}
      className={`${styles.container} ${
        pathName === link.path && styles.active
      }`}
      onClick={() => setOpenMenu(false)}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
