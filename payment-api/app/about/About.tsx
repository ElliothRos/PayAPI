import Navbar from "@/components/navbar/navbar";
import styles from "./page_about.module.scss";
import AboutFact from "@/components/aboutFact/aboutfact";

export default function About() {
  return (
    <main className={styles.main}>
      <div className={`container ${styles.nav}`}>
        <Navbar />
      </div>

      <section className={styles.intro}>
        <h3 className={`h3--big ${styles.intro__title}`}>
          We empower innovators by delivering access to the financial system
        </h3>

        <div className={styles.intro__facts}>
          <AboutFact
            title="Our Vision"
            description="Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. "
          />
          <AboutFact
            title="Our Business"
            description="At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. "
          />
        </div>
      </section>

      <div className={styles.teamImg}></div>
    </main>
  );
}
