import styles from "@/pages/index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <h3>Här är headern</h3>
      </header>

      <main>
        <h1>Här är main</h1>
      </main>

      <footer className={styles.footer}>
        <p>Här är footer</p>
      </footer>
    </div>
  );
}
