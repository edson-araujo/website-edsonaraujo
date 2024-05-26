import { FC } from "react";

export const Favicon: FC = ({}) => {
  return (
    <>
      <meta content="strict-origin-when-cross-origin" name="referrer" />
      <meta charSet="UTF-8" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <meta content="#ffffff" name="msapplication-TileColor" />
      <meta content="/favicon/ms-icon-144x144.png" name="msapplication-TileImage" />
      <meta content="#ffffff" name="theme-color" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </>
  );
};
