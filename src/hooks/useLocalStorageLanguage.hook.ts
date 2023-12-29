import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function useLocalStorageLanguage() {
	const lsKey = 'language';
	const { i18n } = useTranslation();

	useEffect(() => {
		const storedLang = localStorage.getItem(lsKey);
		const langToSet = storedLang || 'en';

		// Меняем язык
		i18n.changeLanguage(langToSet);

		// Сохраняем выбранный язык в localStorage
		localStorage.setItem(lsKey, langToSet);
	}, [i18n]);

	return [];
}

export default useLocalStorageLanguage;