import React from 'react';
import { useTranslations } from '../../hooks';
import './DonateProgressBar.scss';

function DonateProgressBar({ children }) {
    const translate = useTranslations();

    return (
        <div className="donateProgressBar">
            <div className="labels">
                <span>{translate("donateProgressBar.totalAmount")}</span>
                <span>{translate("donateProgressBar.ourGoal")}</span>
            </div>
            {/* <div className="amounts">
                <span>500003</span>
                <span>{translate("donateProgressBar.ourGoal")}</span>
            </div> */}
            <div className="bar">
                <div></div>
            </div>
            <div className="donateHolder">
                {children}
            </div>
        </div>
    )
}

export default DonateProgressBar;