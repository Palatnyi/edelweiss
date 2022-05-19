import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CONFIG from '../../config';
import { useTranslations, useCustomLang, getCurrencyMultiplier } from '../../hooks';
import translations from '../../translations.json';
import './DonateProgressBar.scss';

const { DEFAULT_LANG, CURRENCIES } = translations;

function DonateProgressBar({ children, currencies = [] }) {
    const translate = useTranslations();
    let [width, setWidth] = useState();
    let [result, setResult] = useState();
    const { lang } = useCustomLang();


    const fetchResult = async () => {
        const resp = await axios.get(CONFIG.TOTAL);
        const res = resp && resp.data && resp.data.result;
        width = (parseInt(res) * 100) / 8500000
        setWidth(width);
        setResult(parseInt(res));
    };

    const renderAmountLabel = () => {
        let label;

        if (lang === DEFAULT_LANG) {
            const usdCurrency = getCurrencyMultiplier(currencies, 840);
            label = `${parseFloat(result / usdCurrency.rateBuy).toFixed(0)} ${CURRENCIES[lang]}`
        } else {
            label = `${result} ГРН`
        }

        return label;
    }

    const hasCurrencies = () => currencies.length > 0;

    useEffect(() => {
        fetchResult()
    }, []);

    return (
        <div className="donateProgressBar">
            <div className="labels">
                <span>{translate("donateProgressBar.totalAmount")}</span>
                <span>{translate("donateProgressBar.ourGoal")}</span>
            </div>
            {hasCurrencies() && result && <div className="amounts">
                <span>{renderAmountLabel()}</span>
                <span>{translate("donateProgressBar.goal")}</span>
            </div>}
            <div className="bar">
                <div style={{ width: `${width}%` }}></div>
            </div>
            <div className="donateHolder">
                {children}
            </div>
        </div>
    )
}

export default DonateProgressBar;