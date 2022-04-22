import React from 'react';
import { useTranslations, useCustomLang } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import './NotFound.scss';

function NotFound() {
    const navigate = useNavigate();
    const { lang } = useCustomLang();
    const translate = useTranslations();

    const goBack = () => {
       navigate(`/${lang}`);
    }

    return (
        <div className="notFound">
            <div className="opacity"></div>
            <div className="text">
                <div className="label" >404</div>
                {translate("notFound.text")}
                <div className="goBack" onClick={goBack}>
                    {translate("notFound.goHome")}
                </div>
            </div>
        </div>
    );
}

export default NotFound;