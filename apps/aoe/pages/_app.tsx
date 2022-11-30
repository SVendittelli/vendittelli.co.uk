import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to AoE!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
