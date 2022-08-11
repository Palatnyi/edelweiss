import React from 'react';
import { useTranslations } from '../../hooks';
import './Button.scss';

function Button({ onClick, disabled, label, children }) {
    const translate = useTranslations();

    const disabledClass = disabled ? 'disabled' : ''
    const click = disabled ? () => {} : onClick;

    return (
        <span className={`dopomogaBtn donate-mobile ${disabledClass}`} onClick={click} >
            {label}
            {children}
        </span>
    );
}

export default Button;
