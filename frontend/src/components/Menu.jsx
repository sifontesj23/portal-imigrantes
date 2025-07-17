import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import UserInfo from "./UserInfo";

export default function Menu() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/">{t('home_title')}</Link>
          <Link to="/sobre">{t('about_title')}</Link>
          <Link to="/contato">{t('contact_title')}</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Cadastrar</Link>
          <Link to="/perfil">Perfil</Link>
          <Link to="/curriculo">Cadastrar Currículo</Link>

        </div>
        <UserInfo />
      </nav>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => changeLanguage('pt')}>Português</button>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('es')}>Español</button>
      </div>
    </div>
  );
}

