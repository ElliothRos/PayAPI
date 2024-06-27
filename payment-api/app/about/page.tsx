import Navbar from "@/components/navbar/navbar";
import styles from "./page_about.module.scss";
import AboutFact from "@/components/aboutFact/aboutfact";
import Image from "next/image";

import imgMobile from "../../assets/about/mobile/image-team-members.jpg";
import imgTablet from "../../assets/about/tablet/image-team-members.jpg";
import Ready from "@/components/ready/ready";
import Footer from "@/components/footer/footer";
import TopCircle from "@/components/topcircle/topcircle";

export default function About() {
  return (
    <main className={styles.main}>
      <div className={`container ${styles.nav}`}>
        <Navbar />
      </div>

      <div className={styles.topcircle}>
        <TopCircle />
      </div>

      <section className={`${styles.intro} container`}>
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

      <div className={`${styles.teamImg}`}>
        <picture>
          <source
            srcSet="/about/desktop/image-team-members.jpg"
            media="(min-width: 800px)"
          />
          <source
            srcSet="/about/tablet/image-team-members.jpg"
            media="(min-width: 440px)"
          />
          <img
            src="/about/mobile/image-team-members.jpg"
            alt="image of team members working together"
            className={styles.teamImg__img}
          />
        </picture>
      </div>

      <section className={`container ${styles.stats}`}>
        <div className={styles.stats__stat}>
          <p className={styles.stats__stat_name}>Team Members</p>
          <p className={styles.stats__stat_amount}>300+</p>
        </div>
        <div className={styles.stats__stat}>
          <p className={styles.stats__stat_name}>Offices in the US</p>
          <p className={styles.stats__stat_amount}>3</p>
        </div>
        <div className={styles.stats__stat}>
          <p className={styles.stats__stat_name}>Transactions Analyzed</p>
          <p className={styles.stats__stat_amount}>10M+</p>
        </div>
      </section>

      <section className={`${styles.facts__container} container`}>
      <div className={styles.facts}>
          <AboutFact
            title="The Culture"
            description="We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title. "
          />
          <AboutFact
            title="The People"
            description=" We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills. "
          />
        </div>
      </section>

      <section className={`${styles.ready} cotnainer`}>
        <Ready />
      </section>
      
      <Footer />
    </main>
  );
}
