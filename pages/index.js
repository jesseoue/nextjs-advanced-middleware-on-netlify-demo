import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Advanced Middleware Demo — only on Netlify</title>
        <meta
          name="description"
          content="With @netlify/next, you get access to enhanced request and response features through an intuitive API. Check out the demo."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@whitep4nth3r" />
        <meta name="twitter:creator" content="@whitep4nth3r" />
        <meta property="og:url" content="https://nextjs-advanced-middleware-demo.netlify.app/" />
        <meta property="og:title" content="Next.js Advanced Middleware — Only on Netlify" />
        <meta
          property="og:description"
          content="With @netlify/next, you get access to enhanced request and response features through an intuitive API. Check out the demo."
        />
        <meta property="og:site_name" content="nextjs-advanced-middleware-demo.netlify.app" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://nextjs-advanced-middleware-demo.netlify.app/og.png" />
        <meta property="og:image:alt" content="Next.js Advanced Middleware Demo — only On Netlify" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next.js Advanced Middleware Demo</h1>

        <img alt="Only on Netlify!" src="/sticker.svg" />

        <p className={styles.description}>
          <Link href="/static">Check out the demo on /static &rarr;</Link>
        </p>

        <div className={styles.grid}>
          <a href="https://ntl.fyi/3A0KcUD" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>
              With <strong>@netlify/next</strong>, you get access to enhanced request and response features through an
              intuitive API. Read more on the docs.
            </p>
          </a>

          <a href="https://github.com/whitep4nth3r/nextjs-advanced-middleware-on-netlify-demo" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Check out the code for this demo on GitHub.</p>
          </a>

          <a href="https://youtu.be/_KZIs-8oulw" className={styles.card}>
            <h2>Watch &rarr;</h2>
            <p>Check out the video tutorial on YouTube.</p>
          </a>

          <a href="https://ntl.fyi/3K7uewQ" className={styles.card}>
            <h2>Deploy to Netlify &rarr;</h2>
            <p>Instantly deploy this tutorial site to your own Netlify account.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://ntl.fyi/3K7uewQ" target="_blank" rel="noopener noreferrer">
          <img src="/netlify.svg" alt="Netlify Logo" />
          <span>Powered by Netlify</span>
        </a>
      </footer>
    </div>
  );
}
