import Head from "next/head";
import { useRouter } from "next/router";

interface DocumentProps {
  description: string;
  image: string;
  title: string;
}

const Document = ({ description, image, title }: DocumentProps) => {
  const router = useRouter();

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#6cff5a" />
      <meta name="description" content={description} />
      <meta name="keywords" content="Portfolio, Next.js, GraphQL, Apollo" />
      <meta name="author" content="Tuhin Das" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={`https://tuhindas.me${router.asPath}`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <title>{title}</title>
    </Head>
  );
};

export default Document;
