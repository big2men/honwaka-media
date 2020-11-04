import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Layout.module.css'

const Component = ({ title, children }) => {
  const siteTitle = 'ほんわかメディア'

  return (
    <div className={styles.page}>
      <Head>
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <header className={styles.header}>
        <Image src="/header.jpg" unsized className={styles.headerImage} />
        <h1 className={styles.siteTitle}>
          <Link href="/">
            <a className={styles.headerLink}>{siteTitle}</a>
          </Link>
        </h1>
      </header>
      <main className={styles.main}>
        {title ? <h1 className={styles.pageTitle}>{title}</h1> : ``}
        <div>
          {children}
        </div>
      </main>
      <footer className={styles.footer}>
        &copy; {siteTitle}
      </footer>
    </div>
  )
}

export default Component