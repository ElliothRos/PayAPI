import { text } from "stream/consumers";
import styles from "./contactform.module.scss";

export default function ContactForm() {
  return (
    <form className={styles.form}>
      <input
        className={styles.form__input}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        className={styles.form__input}
        type="text"
        name="email"
        placeholder="Email Address"
      />
      <input
        className={styles.form__input}
        type="text"
        name="company"
        placeholder="Company Name"
      />
      <input
        className={styles.form__input}
        type="text"
        name="title"
        placeholder="Title"
      />
      <textarea
        name="Message"
        placeholder="Message"
        className={`${styles.form__input} ${styles.form__textarea}`}
      ></textarea>

      <div className={styles.form__checkbox}>
        <input
          className={styles.form__checkbox_box}
          type="checkbox"
          name="announcements"
          id="announcements"
        />
        <label className={styles.form__checkbox_label} htmlFor="announcements">
          Stay up-to-date with company announcements and updates to our API
        </label>
      </div>

      <div>
        <button className={`btn ${styles.form__submit}`}>Submit</button>
      </div>
    </form>
  );
}
