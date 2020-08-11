import App, { AppProps } from "next/app";
import * as React from "react";

import "../styles/index.scss";
import "../styles/projectcard.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
