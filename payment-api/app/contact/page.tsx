import Navbar from "@/components/navbar/navbar";
import styles from "./page_contact.module.scss";
import ContactForm from "@/components/contactForm/contactform";

import teslaLogo from "../../assets/shared/desktop/tesla.svg";
import microsoftLogo from "../../assets/shared/desktop/microsoft.svg";
import hpLogo from "../../assets/shared/desktop/hewlett-packard.svg";
import oracleLogo from "../../assets/shared/desktop/oracle.svg";
import googleLogo from "../../assets/shared/desktop/google.svg";
import nvidiaLogo from "../../assets/shared/desktop/nvidia.svg";

import Image from "next/image";
import Ready from "@/components/ready/ready";
import Footer from "@/components/footer/footer";
import TopCircle from "@/components/topcircle/topcircle";

import Partners from "@/components/partners/partners";

export default function Contact() {
  return (
    <main className={styles.main}>
      <div className={`${styles.nav}`}>
        <Navbar />
      </div>

      <div className={styles.topcircle}>
        <TopCircle />
      </div>

      <section className={`container ${styles.contact}`}>
        <h3 className={`h3--big ${styles.contact__title}`}>
          Submit a help request and we'll get in touch shortly.
        </h3>
        <div className={styles.contact__content}>
          <ContactForm />
          <div className={`${styles.partners}`}>
            <h3 className={styles.partners__title}>
              Join the thousands of innovators already building with us
            </h3>

            <Partners blue={true} />
          </div>
        </div>
      </section>

      <section className={`${styles.ready} cotnainer`}>
        <Ready />
      </section>

      <Footer />
    </main>
  );
}
