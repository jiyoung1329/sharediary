import React from 'react';
import Head from 'next/head';

const PageComponent = ({ title, children }) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
      <meta charSet="utf-8" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&family=Roboto&display=swap"
        rel="stylesheet"
      />
    </Head>
    {children}
  </div>
);

export default PageComponent;
