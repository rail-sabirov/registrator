import './App.css'
import LanguageSelector from './components/LanguageSelector/LanguageSelector'
import { LoginPage } from './pages/LoginPage/LoginPage';
import useLocalStorageLanguage from './hooks/useLocalStorageLanguage.hook';


function App() {
    useLocalStorageLanguage();

    return (
        <>
            <div>
                <LanguageSelector />
            </div>
            <LoginPage />
        </>
    )
}

export default App;