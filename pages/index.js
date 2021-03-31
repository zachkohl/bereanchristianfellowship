import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Berean Christian Fellowship</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Welcome to Berean Christian Fellowship
        </h1>
<div>this page is under construction, drop a pull request in the github if you want to help out</div>
<div>Tech wise the plan is to use react/nextjs, netifly-cms, and material ui.</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/zachkohl/bereanchristianfellowship"
          target="_blank"
          rel="noopener noreferrer"
        >
         github link
        </a>
      </footer>
    </div>
  )
}
