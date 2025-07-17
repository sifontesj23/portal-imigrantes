import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('home_title')}</h2>
      <p>{t('home_text')}</p>
    </div>
  );
}
