import App, { AppProps, AppContext } from 'next/app';
import Head from 'next/head';
import GlobalWrapper from '@/styles/Global';

import '@/styles/global.css';
import React, { createContext, useEffect } from 'react';
import {
  ContextThemeProvider,
  useThemeContext,
} from '@/components/core/ThemeContext';
import { getStrapiMedia } from '../lib/media';
import { fetchAPI } from '../lib/api';

// Store Strapi Global object in context
export const GlobalContext = createContext({});

export default function MyApp({ Component, pageProps }: AppProps) {
  const { theme, setDark } = useThemeContext();
  const { global } = pageProps;
  const context = {
    global,
  };

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      </Head>
      <ContextThemeProvider>
        <GlobalContext.Provider value={global}>
          <GlobalWrapper>
            <Component {...pageProps} />
          </GlobalWrapper>
        </GlobalContext.Provider>
      </ContextThemeProvider>
    </>
  );
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949

MyApp.getInitialProps = async (ctx: AppContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI(`/global`);
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } };
};
