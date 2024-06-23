import Image from "next/image";
import checkmark from "../../assets/shared/desktop/icon-check.svg";

import styles from "./offerFeature.module.scss";

export default function OfferFeature({ name, checked }: OfferFeatureProps) {
  return (
    <div className={`${styles.feature} ${checked ? styles.enabled : styles.disabled}`}>
      <Image
        className={styles.feature__img}
        src={checkmark}
        alt="Checkmark"
      />
      <p className={styles.feature__name}>{name}</p>
    </div>
  );
}

interface OfferFeatureProps {
  name: string;
  checked: boolean;
}
