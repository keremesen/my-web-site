import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
       <html lang="en">
      <Head>
        <title>Kerem Esen</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      </html>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
