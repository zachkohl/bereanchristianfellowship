import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navBar/NavBar";
export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar
        title="Berean Christian Fellowship"
        links={[
          { text: "doctrine", url: "/doctrine" },
          { text: "Sermons", url: "/sermons" },
          { text: "Contact", url: "/contact" }
        ]}
      />{" "}
      <Head>
        <title>Berean Christian Fellowship</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Berean Christian Fellowship</h1>
        <div>
          We meet each Sunday, 10 AM, at the Cocolalla Community Hall
          <p> 1557 Fish Creek Rd, Cocolalla, ID 83813, USA</p>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
