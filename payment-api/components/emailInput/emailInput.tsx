"use client";

import styles from "./emailInput.module.scss";

export default function EmailInput() {
  return (
    <>
      <input className={styles.input} type="text" placeholder="Enter email address" />
    </>
  );
}
