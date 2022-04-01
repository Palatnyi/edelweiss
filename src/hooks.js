import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import translations from './translations.json';

const LANGUAGES = {'en': 'en', 'es': 'es', 'ua': 'ua', 'fr': 'fr' };
const DEFAULT_LANG = 'ua';

export function useBrowserLanguage() {

    const navigate = useNavigate()
    const getLang = (languages) => {
        const lng = navigator.languages[0].split("-")[0]
        return languages[lng] || "fr";
    }

    useEffect(() => {
        let url = getLang(LANGUAGES);
        navigate(url);
    }, []);
}

export function useTranslations() {
    let { lang } = useParams();

    return (key) => {
        const keyAsArray = key.split(".");
        let translation = {...translations[lang]};

        for(let i = 0; i < keyAsArray.length; i += 1) {
            const el = keyAsArray[i];

            if(translation[el] !== undefined) {
                translation = translation[el];
            } else {
                return 'NO TRANSLATION'
            }
        }

        return translation;;
    }
}
