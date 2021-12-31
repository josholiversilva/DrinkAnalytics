import Link from 'next/link'
import Head from 'next/head'
import Content from '../components/Content'
import contentStyles from '../styles/Content.module.css'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className={contentStyles.selections}>
        <button className={contentStyles.selection} href="/">Year</button>
        <button className={contentStyles.selection} href="/">Month</button>
        <button className={contentStyles.selection} href="/">Week</button>
        <button className={contentStyles.current}>Current</button>
      </div>
      <div className={contentStyles.box}>
        <Content />
      </div>
      <h1>Hello World</h1>
    </>
  )
}
