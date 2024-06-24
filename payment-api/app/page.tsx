import Image from "next/image";
import styles from "./page.module.scss";
import Navbar from "@/components/navbar/navbar";
import lol from "../assets/home/desktop/illustration-phone-mockup.svg";
import "../util/variables.scss";
import EmailInput from "@/components/emailInput/emailInput";
import Link from "next/link";

import circle from "../assets/shared/desktop/bg-pattern-circle.svg";

import teslaLogo from "../assets/shared/desktop/tesla-white.svg";
import microsoftLogo from "../assets/shared/desktop/microsoft-white.svg";
import hpLogo from "../assets/shared/desktop/hewlett-packard-white.svg";
import oracleLogo from "../assets/shared/desktop/oracle-white.svg";
import googleLogo from "../assets/shared/desktop/google-white.svg";
import nvidiaLogo from "../assets/shared/desktop/nvidia-white.svg";

import codeExample from "../assets/home/desktop/illustration-easy-to-implement.svg";
import simpleUI from "../assets/home/desktop/illustration-simple-ui.svg";

import financeLogo from "../assets/home/desktop/icon-personal-finances.svg";
import bankingLogo from "../assets/home/desktop/icon-banking-and-coverage.svg";
import paymentLogo from "../assets/home/desktop/icon-consumer-payments.svg";

import SecondaryFeature, {
  SecondaryFeatureProps,
} from "@/components/secondaryFeature/secondaryFeature";
import Footer from "@/components/footer/footer";
import Ready from "@/components/ready/ready";

export default function Home() {
  const secondaryFeatures: SecondaryFeatureProps[] = [
    {
      title: "Personal Finances",
      logo: financeLogo,
      description:
        "Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. ",
    },
    {
      title: "Banking & Coverage",
      logo: bankingLogo,
      description:
        "With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.",
    },
    {
      title: "Consumer Payments",
      logo: paymentLogo,
      description:
        "It's easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.",
    },
  ];

  return (
    <main className={styles.main}>
      <div className={`${styles.main__nav} container`}>
        <Navbar />
      </div>

      <div className={styles.hero}>
        <Image className={styles.hero__bgcircle} src={circle} alt="Circle" />

        <Image className={styles.hero__img} src={lol} alt="Mobile phone" />

        <div className={styles.hero__content}>
          <h3 className={`h3--big ${styles.hero__content_title}`}>
            Start building with our APIs for absolutely free.
          </h3>
          <form className={styles.hero__content_form}>
            <div className={styles.hero__content_form_input}>
              <EmailInput />
            </div>
            <button
              className={`btn btn-primary ${styles.hero__content_form_btn}`}
            >
              Schedule a Demo
            </button>
          </form>

          <p className={styles.hero__content_questions}>
            Have any questions?{" "}
            <Link className={styles.hero__content_link} href={"#"}>
              Contact us
            </Link>
          </p>
        </div>
      </div>

      <div className={styles.partners}>
        <div className={styles.partners__logos}>
          <Image
            className={styles.partners__logo}
            src={teslaLogo}
            alt="Tesla logo"
          />
          <Image
            className={styles.partners__logo}
            src={microsoftLogo}
            alt="Microsoft logo"
          />
          <Image className={styles.partners__logo} src={hpLogo} alt="HP logo" />
          <Image
            className={styles.partners__logo}
            src={oracleLogo}
            alt="Oracle logo"
          />
          <Image
            className={styles.partners__logo}
            src={googleLogo}
            alt="Google logo"
          />
          <Image
            className={styles.partners__logo}
            src={nvidiaLogo}
            alt="Nvidia logo"
          />
        </div>
        <h3 className={`h3--big ${styles.partners__title}`}>
          Who we work with
        </h3>
        <p className={styles.partners__text}>
          Today, millions of people around the world have successfully connected
          their accounts to apps they love using our API. We provide developers
          with the tools they need to create easy and accessible experiences for
          their users.
        </p>
        <button className={`btn btn-ghost ${styles.partners__btn}`}>
          About Us
        </button>
      </div>

      <section className={styles.features_}>
        <div className={styles.features__primary}>
          <div className={styles.features__primary_easy}>
            <Image
              className={styles.features__primary_easy_img}
              src={codeExample}
              alt="code example displaying ease of implementation"
            />
            <h3 className={`h3--big ${styles.features__primary_easy_title}`}>
              Easy to implement
            </h3>
            <p className={styles.features__primary_easy_text}>
              Our API comes with just a few lines of code. You'll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </p>
          </div>

          <div className={styles.features__primary_simple}>
            <Image
              className={styles.features__primary_simple_img}
              src={simpleUI}
              alt="image showingcasing the simple UI"
            />
            <h3 className={`h3--big ${styles.features__primary_simple_title}`}>
              Simple UI & UX
            </h3>
            <p className={styles.features__primary_simple_text}>
              Our pre-built form is easy to integrate in your app or website's
              checkout flow and designed to optimize conversion.
            </p>
          </div>
        </div>

        <div className={styles.features__secondary}>
          {secondaryFeatures.map((feature, index) => (
            <SecondaryFeature
              key={index}
              title={feature.title}
              logo={feature.logo}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      <section className={styles.ready}>
        <Ready />
      </section>

      <Footer />
    </main>
  );
}
