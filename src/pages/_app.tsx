import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';

const progress = new ProgressBar({
  size: 5,
  color: 'red',
  delay: 100,
  className: 'z-50',
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

export default function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}
