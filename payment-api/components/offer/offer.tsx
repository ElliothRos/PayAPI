import OfferFeature from "../offerFeature/offerFeature";
import styles from "./offer.module.scss";

export default function Offer({
  name,
  price,
  description,
  transactions,
  auth,
  identity,
  investments,
  assets,
  liabilities,
  income,
}: OfferProps) {
  const features = [
    { name: "Transactions", checked: transactions },
    { name: "Auth", checked: auth },
    { name: "Identity", checked: identity },
    { name: "Investments", checked: investments },
    { name: "Assets", checked: assets },
    { name: "Liabilities", checked: liabilities },
    { name: "Income", checked: income },
  ];

  return (
    <div className={styles.offer}>
      <h3 className={styles.offer__name}>{name}</h3>
      <p className={styles.offer__description}>{description}</p>
      <h4 className={styles.offer__price}>${price}.00</h4>

      <ul className={styles.offer__list}>
        {features.map((feature, index) => (
          <li key={index}>
            <OfferFeature name={feature.name} checked={feature.checked} />
          </li>
        ))}
      </ul>

      <button className={`btn ${styles.offer__btn}`}>
        Request Access
      </button>
    </div>
  );
}

export interface OfferProps {
  name: string;
  price: number;
  description: string;
  transactions: boolean;
  auth: boolean;
  identity: boolean;
  investments: boolean;
  assets: boolean;
  liabilities: boolean;
  income: boolean;
}
