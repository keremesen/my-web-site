import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <html lang="en">
        <Head>
          <title>Kerem Esen</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="description" content="hi im kerem 19 yo developer. im trying to learn and do something at react.js / next.js" />
        </Head>
      </html>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
