import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";


import translations from './translations.json';

let storage;
const { LANGUAGES, DEFAULT_LANG } = translations;

export function useBrowserLanguage() {

    const navigate = useNavigate();
    const getLang = (languages) => {
        const lng = navigator.languages[0].split("-")[0]
        const localStorageLang = localStorage.getItem('lang');

        return localStorageLang || languages[lng] || "/en";
    }

    useEffect(() => {
        let lang = getLang(LANGUAGES);
        const url = getNewLangPathname(lang);
        url && navigate(url);
    }, []);
}

export function getNewLangPathname(lang) {
    const regexp = new RegExp(/\/[a-zA-Z]{2}/);
    if (!window.location.pathname.match(regexp)) {
        return lang;
    }

    return window.location.pathname.replace(/\/[a-zA-Z]{2}/, lang);
}

export function useTranslations() {
    const { pathname } = useLocation();
    const currentLang = pathname.split('/').find(path => {
        return !!LANGUAGES[path];
    });

    const lang = currentLang || DEFAULT_LANG;

    return (key) => {
        const keyAsArray = key.split(".");
        let translation = { ...translations[lang] };

        for (let i = 0; i < keyAsArray.length; i += 1) {
            const el = keyAsArray[i];

            if (translation[el] !== undefined) {
                translation = translation[el];
            } else {
                return
            }
        }

        return translation;;
    }
}

export function useCustomLang() {
    const { pathname } = useLocation();

    const currentLang = pathname.split('/').find(path => {
        return !!LANGUAGES[path];
    });

    const lang = currentLang || DEFAULT_LANG;

    return { lang }
}

export function getCurrencyMultiplier(currencies, code) {
    const currency = currencies.find(currency => currency.currencyCodeA === code);
    return currency;
}

export const getDownloadableUrls = async (folderName) => {
    storage = getStorage();

    const urls = [];

    try {
        const listRef = ref(storage, folderName);
        const res = await listAll(listRef)
        for (const item of (res.items || [])) {
            const imgRef = ref(storage, `${item.fullPath}`);
            const url = await getDownloadURL(imgRef);
            urls.push(url);
        }
    } catch (e) {
        console.log('Error in getDownloadableUrls', e);
    }

    return urls;
}
