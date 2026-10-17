import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { Normalize } from "styled-normalize";
import GlobalStyle from "../styles/GlobalStyle";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";
import Background from "../components/Background";
import Script from "next/script";
// const Background = dynamic(() => import('../components/Background'), { ssr: false, loading: () => null });

function App({ Component, pageProps }) {
  const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || "GTM-P52JLLB7";

  return (
    <React.StrictMode>
      {gtmId && (
        <Script
          id='gtm-script'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
          }}
        />
      )}
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle />
        <Background {...pageProps} />
        <Header {...pageProps} />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
