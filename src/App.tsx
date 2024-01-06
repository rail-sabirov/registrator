import './App.module.scss';
import LanguageSelector from './components/LanguageSelector/LanguageSelector'
import { LoginPage } from './pages/LoginPage/LoginPage';
import useLocalStorageLanguage from './hooks/useLocalStorageLanguage.hook';
import MainLayout from './layouts/MainLayout/MainLayout';
import FaxPage from './pages/FaxPage/FaxPage';



function App() {
    useLocalStorageLanguage();

    return (
        <>
            {/* <div>
                <LanguageSelector />
            </div> */}
            {/* <LoginPage /> */}
            {/* <MainLayout>
                <FaxPage />
            </MainLayout> */}
        </>
    )
}

export default App;