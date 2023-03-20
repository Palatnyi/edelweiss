import React from 'react';
import { useTranslations } from '../../hooks';
import './Button.scss';

function Button({ onClick, disabled, label, children, outlined, className }) {
    const disabledClass = disabled ? 'disabled' : ''
    const click = disabled ? () => { } : onClick;
    const outlinedClassname = outlined ? 'dopomogaBtn-outlined' : '';

    return (
        <span className={`dopomogaBtn donate-mobile ${className} ${outlinedClassname} ${disabledClass}`} onClick={click} >
            {label}
            {children}
        </span>
    );
}

export default Button;
