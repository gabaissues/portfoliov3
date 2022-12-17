import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'

import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  React.useEffect(() => {

    AOS.init()

  })

  return (
  <>
    <Component {...pageProps} />
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
  </>
  )
}
