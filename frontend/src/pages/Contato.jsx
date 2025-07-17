import { useTranslation } from 'react-i18next';

export default function Contato() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('contact_title')}</h2>
      <p>{t('contact_text')}</p>
    </div>
  );
}
