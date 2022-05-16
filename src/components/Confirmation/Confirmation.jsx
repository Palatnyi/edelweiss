import React from 'react';
import { useTranslations, useCustomLang } from '../../hooks';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Confirmation.scss';

function Confirmation() {
    const navigate = useNavigate();
    const { lang } = useCustomLang();
    const translate = useTranslations();
    let [searchParams, setSearchParams] = useSearchParams();

    const amount = searchParams.get("amount");
    const currency = searchParams.get("currency");

    window.fbq('track', 'Purchase', {currency, value: amount}); 

    const goBack = () => {
        navigate(`/${lang}`);
    }

    return (
        <div className="confirmation">
            <div className="opacity"></div>
            <div className="text">
                {translate("confirmation.text")}
                <div className="goBack" onClick={goBack}>
                    {translate("confirmation.goback")}
                </div>
            </div>
        </div>
    );
}

export default Confirmation;