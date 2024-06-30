import Document, { Html, Head, Main, NextScript } from "next/document";
import { Favicon } from "@/components/_document/favicon";
import { Font } from "@/components/_document/font";

export default function MyDocument() {
  return (
    <Html lang="pt">
      <Head>
        <meta
          name="title"
          content="Eu sou o Edson Araújo, desenvolvedor Full Stack, tecnologia sprincipais Java, Spring, React"
        />
        <meta
          name="description"
          content="Eu sou o Edson Araújo, desenvolvedor Full Stack, tecnologia sprincipais Java, Spring, React"
        />
        <Font />
        <Favicon />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
