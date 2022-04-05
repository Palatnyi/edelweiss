import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import translations from './translations.json';

const {LANGUAGES, DEFAULT_LANG } = translations;

export function useBrowserLanguage() {

    const navigate = useNavigate()
    const getLang = (languages) => {
        const lng = navigator.languages[0].split("-")[0]
        return languages[lng] || DEFAULT_LANG;
    }

    useEffect(() => {
        let url = getLang(LANGUAGES);
        url && navigate(url);
    }, []);
}

export function useTranslations() {
    let { lang = DEFAULT_LANG } = useParams();

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
