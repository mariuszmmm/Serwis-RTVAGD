import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { Normalize } from "styled-normalize";
import GlobalStyle from "../styles/GlobalStyle";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";
import Background from "../components/Background";
// const Background = dynamic(() => import('../components/Background'), { ssr: false, loading: () => null });

function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
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
