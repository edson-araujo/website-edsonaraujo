// pages/_document.tsx

import { Favicon } from "@/components/_document/favicon";
import { Font } from "@/components/_document/font";
import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

class Root extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <Favicon />
          <link
            as="font"
            crossOrigin="anonymous"
            href="/fonts/inter-var-latin.woff2"
            rel="preload"
            type="font/woff2"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16"></link>
        </Head>
        <body className="color-gray--slate bg-white [--line-color:theme(colors.gray.200/0.8)] d:bg-gray-900 d:bg-gradient-to-b d:from-black/40 d:to-black/40">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Root;
