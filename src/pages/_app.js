import Script from "next/script";
import Layout from "../layout/Layout";
import "../../styles/globals.css";
import ScrollToTopButton from "../components/ScrollToTopButton";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script strategy="lazyOnload">
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
}

export default MyApp;
