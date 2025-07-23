import { useTranslation } from 'react-i18next';

export default function Sobre() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('about_title')}</h2>
      <p>{t('about_text')}</p>
    </div>
  );
}
