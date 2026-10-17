import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { baseUrl } from "../utils/urls";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='pl'>
        <Head>
          {/* Performance optimizations */}
          {/* <link rel="preconnect" href="https://www.googletagmanager.com" /> */}
          {/* <link rel="dns-prefetch" href="https://www.googletagmanager.com" /> */}
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" /> */}

          {/* Favicons - kompletny zestaw */}
          <link rel='icon' type='image/png' href={baseUrl + "/images/favicon-96x96.png"} sizes='96x96' />
          <link rel='icon' type='image/svg+xml' href={baseUrl + "/images/favicon.svg"} />
          <link rel='shortcut icon' href={baseUrl + "/images/favicon.ico"} />
          <link rel='apple-touch-icon' sizes='180x180' href={baseUrl + "/images/apple-touch-icon.png"} />
          <link rel='manifest' href={baseUrl + "/site.webmanifest"} />

          {/* Basic meta tags */}
          <meta
            key='robots'
            name='robots'
            content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
          />

          <meta key='Content-Language' httpEquiv='Content-Language' content='pl' />
          <meta key='theme-color' name='theme-color' content='#141111' />

          {/* Security headers */}
          <meta key='X-Content-Type-Options' httpEquiv='X-Content-Type-Options' content='nosniff' />
          <meta key='Referrer-Policy' httpEquiv='Referrer-Policy' content='strict-origin-when-cross-origin' />

        </Head>
        <body>
          {/* GTM NoScript */}

          <noscript>
            <iframe
              src='https://www.googletagmanager.com/ns.html?id=GTM-P52JLLB7'
              height='0'
              width='0'
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
