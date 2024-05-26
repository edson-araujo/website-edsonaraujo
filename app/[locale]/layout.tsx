import { ContextProviders } from "@/components/_stores/_context-providers";
import { LoadInitialData } from "@/components/_stores/_load-initial-data";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer";
import "@/style/globals.css";
import Head from "next/head";
import { Favicon } from "@/components/_document/favicon";

export const metadata: Metadata = {
  title: "Edson Araújo - Fullstack Developer - Java, Spring, React",
  description: "Eu sou o Edson Araújo, desenvolvedor FullStack, tecnologia sprincipais Java, Spring, React",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();
  return (
    <html lang="pt">
      <head>
       <Favicon/>
      </head>
      <body
        className={cn(
          "color-gray--slate bg-white [--line-color:theme(colors.gray.200/0.8)] d:bg-gray-900 d:bg-gradient-to-b d:from-black/40 d:to-black/40"
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ContextProviders>
            <Header />
            <main className="min-h-screen print:!mx-auto print:!w-[1024px]">
              {" "}
              <LoadInitialData>{children}</LoadInitialData>
            </main>
            <Footer />
          </ContextProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
