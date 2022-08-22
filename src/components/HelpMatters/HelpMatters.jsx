import React from 'react';
import { useTranslations } from '../../hooks';
import DonateRequisities from './components/DonateRequisities/DonateRequisities.jsx'
import './HelpMatters.scss';


function HelpMatters() {
    const translate = useTranslations();

    return (
        <div className="help-matters" id="donate">
            <div className="requisities">
                {translate("requisities.ourRequisites")}
            </div>
            <DonateRequisities />
        </div>
    );
}

export default HelpMatters;