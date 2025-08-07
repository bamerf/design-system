/*
 * Copyright (c) 2024 LeadChat. All rights reserved.
 */

import React from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>LeadChat Design System</title>
        <meta name="description" content="LeadChat Component Library" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
