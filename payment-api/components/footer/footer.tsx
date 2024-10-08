import styles from "./footer.module.scss";
import logo from "../../assets/shared/desktop/logo-white.svg";
import Image from "next/image";
import Link from "next/link";

import fbIcon from "../../assets/shared/desktop/facebook.svg";
import twitterIcon from "../../assets/shared/desktop/twitter.svg";
import linkedinIcon from "../../assets/shared/desktop/linkedin.svg";

import "../../util/variables.scss";

export default function Footer() {
  return (
    <div className={styles.footer__container}>
      <footer className={`${styles.footer_wrapper}`}>
        <div className={`${styles.footer} container`}>
          <Link href={"/"}>
            <Image src={logo} alt="payapi logo" />
          </Link>
          <ul className={styles.footer__links}>
            <li>
              <Link className={styles.footer__links_link} href={"/pricing"}>
                Pricing
              </Link>
            </li>
            <li>
              <Link className={styles.footer__links_link} href={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link className={styles.footer__links_link} href={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>

          <div className={styles.footer__icons}>
            <Image src={fbIcon} alt="Facebook icon" />
            <Image src={twitterIcon} alt="Twitter icon" />
            <Image src={linkedinIcon} alt="Linkedin icon" />
          </div>
        </div>

        <div className={styles.footer__circle}></div>
      </footer>
    </div>
  );
}
