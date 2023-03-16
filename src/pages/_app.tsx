import '../styles/globals.css';
import type { AppProps } from 'next/app';

/**
 * App 파일입니다.
 * @param param0
 * @returns
 */

export default function App({ Component, pageProps }: AppProps) {
  return <Component pageProps={pageProps} />;
}
