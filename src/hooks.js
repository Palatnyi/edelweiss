import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import translations from './translations.json';

const { LANGUAGES, DEFAULT_LANG } = translations;

export function useBrowserLanguage() {

    const navigate = useNavigate()
    const getLang = (languages) => {
        const lng = navigator.languages[0].split("-")[0]
        return languages[lng] || "/en";
    }

    useEffect(() => {
        let url = getLang(LANGUAGES);
        url && navigate(url);
    }, []);
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
