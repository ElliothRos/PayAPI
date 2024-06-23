import Navbar from "@/components/navbar/navbar";
import styles from "./page_pricing.module.scss";

import "../../util/variables.scss";
import Offer, { OfferProps } from "@/components/offer/offer";
import Footer from "@/components/footer/footer";

export default function Pricing() {
  const offers: OfferProps[] = [
    {
      name: "Free Plan",
      price: 0.0,
      description:
        "Build and test using our core set of products with up to 100 API requests",
      transactions: true,
      auth: true,
      identity: true,
      investments: false,
      assets: false,
      liabilities: false,
      income: false,
    },
    {
      name: "Basic Plan",
      price: 249.0,
      description:
        "Launch your project with unlimited requests and no contractual minimums",
      transactions: true,
      auth: true,
      identity: true,
      investments: true,
      assets: true,
      liabilities: false,
      income: false,
    },
    {
      name: "Premium Plan",
      price: 499.0,
      description:
        "Get tailored solutions, volume pricing, and dedicated support for your team ",
      transactions: true,
      auth: true,
      identity: true,
      investments: true,
      assets: true,
      liabilities: true,
      income: true,
    },
  ];

  return (
    <main className={styles.main}>
      <div className={`${styles.main__nav} container`}>
        <Navbar />
      </div>

      <section className={`${styles.offers} container`}>
        <h3 className={`h3--big ${styles.offers__title}`}>Pricing</h3>

        <div className={styles.offers__list}>
          {offers.map((offer, index) => (
            <Offer
              key={index}
              name={offer.name}
              price={offer.price}
              description={offer.description}
              transactions={offer.transactions}
              auth={offer.auth}
              identity={offer.identity}
              investments={offer.investments}
              assets={offer.assets}
              liabilities={offer.liabilities}
              income={offer.liabilities}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
