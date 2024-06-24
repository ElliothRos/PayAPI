import styles from "./ready.module.scss";
import EmailInput from "../emailInput/emailInput";

export default function Ready() {
  return (
    <div className={styles.ready}>
      <h3 className={`h3--big ${styles.ready__title}`}>Ready to start?</h3>
      <form className={styles.ready__form}>
        <div className={styles.ready__form_input}>
          <EmailInput />
        </div>
        <button className={`btn btn-primary ${styles.ready__form_btn}`}>
          Schedule a Demo
        </button>
      </form>
    </div>
  );
}
