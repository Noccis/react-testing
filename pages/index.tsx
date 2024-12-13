import Header from "@/components/Header";
import styles from "@/pages/index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main>

        <h1>Välkommen!</h1>
        <p>Jag vet att den här hemsidan ser tråkig ut men det är för att jag bara skapade den för att skriva tester...</p>
      </main>
    </div>
  );
}
