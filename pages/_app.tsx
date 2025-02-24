import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import '../styles/global.css';
import ym from 'react-yandex-metrika';
import { YMInitializer } from 'react-yandex-metrika';

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  router.events.on('routeChangeComplete', (url: string) => {
    if (typeof window !== 'undefined') {
      ym('hit', url);
    }
  })

  return (
    <>
      <Head>
        <title>NextJS App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet" />
        <meta name='og:url' content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
        <meta name='og:locale' content='ru_RU' />
      </Head>
      <YMInitializer
        accounts={[]}
        options={{ webvisor: true, defer: true }}
        version='2'
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;