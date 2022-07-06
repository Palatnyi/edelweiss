import React from 'react';
import { useTranslations } from '../../hooks';
import './Button.scss';

function Button({ onClick, disabled, label }) {
    const translate = useTranslations();

    const disabledClass = disabled ? 'disabled' : ''
    const click = disabled ? () => {} : onClick;

    return (
        <span className={`dopomogaBtn donate-mobile ${disabledClass}`} onClick={click} >{label}</span>
    );
}

export default Button;
