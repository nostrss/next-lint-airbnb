import Head from 'next/head';
import styles from '../styles/Home.module.css';
// import DetailPage from './detail';

/**
 *
 * Home 컴포넌트입니다.
 * @returns
 */

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>{/* <DetailPage /> */}</main>
    </>
  );
}
