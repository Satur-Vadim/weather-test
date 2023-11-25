import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import Footer from './footer/Footer';
import ILayout from './interfaces/ILayout';
import styles from './sass/Layout.module.scss';

const Layout = ({ children }: ILayout) => {
  const { t } = useTranslation('common');
  return (
    <div className={styles.container}>
      <Head>
        <title>{t('onixNextExample')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
