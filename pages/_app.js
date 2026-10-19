import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { Normalize } from "styled-normalize";
import GlobalStyle from "../styles/GlobalStyle";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Background from "../components/Background";

function App({ Component, pageProps }) {
  const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || "GTM-P52JLLB7";

  React.useEffect(() => {
    if (!gtmId || typeof window === "undefined") return;

    const loadGTM = () => {
      if (window.__gtmLoaded) return;
      window.__gtmLoaded = true;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
      document.head.appendChild(script);
    };

    // Załaduj przy pierwszej interakcji (dotyk, scroll) lub gdy przeglądarka wejdzie w stan bezczynności
    const events = ["scroll", "touchstart", "mousemove", "keydown"];
    const onUserInteraction = () => {
      loadGTM();
      events.forEach((event) => window.removeEventListener(event, onUserInteraction));
    };

    events.forEach((event) => window.addEventListener(event, onUserInteraction, { passive: true, once: true }));

    // Fallback: załaduj automatycznie w stanie idle lub najpóźniej po 3 sekundach
    let idleId;
    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(loadGTM, { timeout: 3000 });
    } else {
      idleId = setTimeout(loadGTM, 2500);
    }

    return () => {
      events.forEach((event) => window.removeEventListener(event, onUserInteraction));
      if ("cancelIdleCallback" in window && idleId) {
        window.cancelIdleCallback(idleId);
      } else {
        clearTimeout(idleId);
      }
    };
  }, [gtmId]);

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
