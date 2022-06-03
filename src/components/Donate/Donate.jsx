import React from 'react';
import { useTranslations } from '../../hooks';
import './Donate.scss';

function Donate({ onClick, disabled }) {
    const translate = useTranslations();

    const disabledClass = disabled ? 'disabled' : ''
    const click = disabled ? () => {} : onClick;

    return (
        <span className={`donateBtn donate-mobile ${disabledClass}`} onClick={click} >{translate("common.donate")}</span>
    );
}

export default Donate;
