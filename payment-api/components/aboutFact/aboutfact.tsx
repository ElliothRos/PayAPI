import styles from "./aboutfact.module.scss";

export default function AboutFact(props: AboutFactProps) {
  return (
    <div className={styles.fact}>
      <h4 className={styles.fact__title}>{props.title}</h4>
      <p className={styles.fact__desc}>{props.description}</p>
    </div>
  );
}

interface AboutFactProps {
  title: string;
  description: string;
}
