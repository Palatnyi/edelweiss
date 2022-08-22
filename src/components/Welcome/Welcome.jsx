import React from 'react';
import { useTranslations } from '../../hooks';
import Button from '../Button/Button.jsx';
import Separator from '../Separator/Separator.jsx';
import './Welcome.scss';

function Welcome() {
    const translate = useTranslations();
    const label = translate("welcome.donate");
    const collected = translate("welcome.collected");
    const description = translate("welcome.description");
    const communication = translate("welcome.communication");
    const onClick = () => {
        window.open('https://secure.wayforpay.com/donate/d27ead814ba59');
    }

    return (
        <div className="welcome">
            <div className="welcome_logo">
            </div>
            <div className="communication">
                {communication}
                <div className="text">
                    {description}
                </div>
                <Button onClick={onClick} label={label} />
                <div className="collected">
                    {collected}
                </div>
                <div className="money">
                    {'> 400000 USD'}
                </div>
                <Separator />
            </div>
        </div>
    );
}

export default Welcome;