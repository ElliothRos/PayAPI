"use client";

import { useRef } from "react";
import Image from "next/image";
import logo from "../../assets/shared/desktop/logo.svg";
import openIcon from "../../assets/shared/mobile/menu.svg";
import closeIcon from "../../assets/shared/mobile/close.svg";
import styles from "./navbar.module.scss";
import Link from "next/link";
import "../../util/variables.scss"

export default function Navbar() {
  const navRef = useRef<HTMLInputElement>(null);

  const showNavbar = () => {
    navRef.current?.classList.toggle(styles.responsive_nav);
  };

  return (
    <header className={styles.header}>
      <Link href={"/"}><Image className={styles.header__logo} src={logo} alt="PayAPI logo" /></Link>
      <nav ref={navRef} className={styles.nav}>
        <ul className={styles.nav__links}>
          <li>
            <Link className={styles.nav__link} href={"/pricing"}>
              Pricing
            </Link>
          </li>
          <li>
            <Link className={styles.nav__link} href={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link className={styles.nav__link} href={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>

        <button className={`btn btn-primary ${styles.nav__btn_schedule}`}>Schedule a Demo</button>

        <button className={`${styles.nav__btn} ${styles.nav__btn_close}`}>
          <Image src={closeIcon} alt="Close navbar icon" onClick={showNavbar} />
        </button>
      </nav>
      <button className={`${styles.nav__btn} ${styles.nav__btn_open}`}>
        <Image src={openIcon} alt="Open navbar icon" onClick={showNavbar} />
      </button>
    </header>
  );
}
