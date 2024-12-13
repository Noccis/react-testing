import React from "react";
import Link from "next/link";
import styles from "@/components/Header.module.css";

export default function Header() {
  return (
    <header id={styles.header} className={styles.flex}>
      <h1>Testing with jest.</h1>
     
        <ul className={`${styles.ul} ${styles.flex}`}>
          <li className={styles.margin}>
            <Link href="/">Hem</Link>
          </li>
          <li className={styles.margin}>
            <Link href="/notes">Notes</Link>
          </li>
        </ul>

    </header>
  );
}
