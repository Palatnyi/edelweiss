import React from 'react';
import Donate from '../Donate/Donate.jsx';
import { useTranslations } from '../../hooks';
import DonateRequisities from './components/DonateRequisities/DonateRequisities.jsx'
import './HelpMatters.scss';


function HelpMatters({ openDonationDialog }) {
    const translate = useTranslations();

    return (
        <div className="help-matters" id="donate">
            <div className="title">
                {translate("requisities.title")}
            </div>
            <div className="description">
                {translate("requisities.description")}
            </div>
            <div className="requisities">
                {translate("requisities.ourRequisites")}
            </div>

            <DonateRequisities />

            <div className="donate-btn-holder">
                <Donate onClick={openDonationDialog} />
            </div>
        </div>
    );
}

export default HelpMatters;