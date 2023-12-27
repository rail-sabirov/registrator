import './App.css'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './components/LanguageSelector/LanguageSelector'
import { LoginPage } from './pages/LoginPage/LoginPage';


function App() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <h2>{t('welcome')}</h2>
        <p>{t('about')}</p>
        <p>{t('contact')}</p>
        <LanguageSelector/>
      </div>
      <LoginPage />
    </>
  )
}

export default App
