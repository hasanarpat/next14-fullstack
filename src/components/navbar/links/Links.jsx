"use client";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const session = true;
const isAdmin = true;

const loginButton = {
  title: "Login",
  path: "/login",
};
const adminButton = {
  title: "Admin",
  path: "/admin",
};

const Links = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink link={link} key={link.path} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink link={adminButton} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink link={loginButton} />
        )}
      </div>
      <Image
        src="/menu.png"
        alt="menu button"
        width={25}
        height={25}
        className={styles.menuButton}
        onClick={() => setOpenMenu((prev) => !prev)}
      />
      {openMenu && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink link={link} key={link.path} setOpenMenu={setOpenMenu} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
