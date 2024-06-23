import { StaticImageData } from "next/image";
import styles from "./secondaryFeature.module.scss";
import Image from "next/image";

export default function SecondaryFeature(props: SecondaryFeatureProps) {
  return (
    <div className={styles.feature}>
      <Image
        className={styles.feature__img}
        src={props.logo}
        alt={`Logo displaying ${props.title} feature`}
      />
      <h3 className={styles.feature__title}>{props.title}</h3>
      <p className={styles.feature__desc}>{props.description}</p>
    </div>
  );
}

export interface SecondaryFeatureProps {
  title: string;
  description: string;
  logo: StaticImageData;
}
