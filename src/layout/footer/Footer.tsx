import { useTranslation } from 'next-i18next';
import styles from './sass/Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className={styles.footer}>
      <a
        href="https://onix-systems.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('poweredBy')}
        {' '}
        {t('onix')}
      </a>
    </footer>
  );
};

export default Footer;
