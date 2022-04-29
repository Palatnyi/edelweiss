import React from 'react';
import axios from 'axios';
import { useTranslations, useCustomLang } from '../../hooks';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Confirmation.scss';

function Confirmation({ openDonationDialog }) {
    const navigate = useNavigate();
    const { lang } = useCustomLang();
    const translate = useTranslations();
    let [searchParams, setSearchParams] = useSearchParams();
    const order_id = searchParams.get("order_id");
    const url = process.env.NODE_ENV === 'development' ? 'http://localhost:4444/dopomoga2022/us-central1/app/api/confirm' : 'https://us-central1-dopomoga2022.cloudfunctions.net/app/api/confirm'


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