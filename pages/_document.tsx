import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    
    <Html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <script
            type="text/javascript"
            src="https://s3.coinmarketcap.com/generated/search/box/latest.js"
            async
          ></script>

      </Head>
     
       

      <body className="antialiased">
        <Main />
        <NextScript />

      </body>
    </Html>
  );
}
