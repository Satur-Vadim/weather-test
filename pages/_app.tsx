import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { AppProps } from 'next/app';
import IStaticProps from '../src/interfaces/IStaticProps';
import '../src/pages/App/sass/globals.scss';
import '../src/pages/App/css/index.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export async function getStaticProps({ locale }: IStaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default appWithTranslation(MyApp);
