import { GlobalStyles } from '@/styles/globalStyle';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Component pageProps={pageProps} />
    </>
  );
}
