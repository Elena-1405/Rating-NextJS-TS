import type { AppProps } from 'next/app'
 
import React from 'react';
import Head from 'next/head';
import '../styles/global.css';

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>NextJS App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet" />
        <meta name='og:url' content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
        <meta name='og:locale' content='ru_RU' />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;