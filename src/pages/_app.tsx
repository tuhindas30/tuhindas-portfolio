import type { AppProps } from "next/app";
import Script from "next/script";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
const ScrollToTopButton = dynamic(
  () => import("../components/ScrollToTopButton")
);
import "../../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
     `}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ScrollToTopButton />
    </>
  );
};

export default MyApp;
