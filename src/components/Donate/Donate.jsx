import React from 'react';
import { useTranslations } from '../../hooks';
import './Donate.scss';

function Donate({ onClick }) {
    const translate = useTranslations();

    return (
        <span className="donateBtn donate-mobile" onClick={onClick} >{translate("common.donate")}</span>
    );
}

export default Donate;
