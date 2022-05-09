import React from 'react';
import Donate from '../Donate/Donate.jsx';
import { useTranslations } from '../../hooks';
import './Welcome.scss';

function Welcome({ openDonationDialog }) {
    const translate = useTranslations();

    return (
        <div className="welcome">
            <div className="opacity"></div>
            <div className="communication">
                {translate("welcome.communication")}
                <div className="text">
                    {translate("welcome.description")}
                </div>
                <Donate onClick={openDonationDialog} />
            </div>
        </div>
    );
}

export default Welcome;