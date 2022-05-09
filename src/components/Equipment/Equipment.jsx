import React from 'react';
import { useTranslations } from '../../hooks';
import system from '../../images/system.jpg';
import './Equipment.scss';

function Equipment() {
    const translate = useTranslations();

    return (
        <div className="equipment" id="needs">
            <div className="text">
                <div className="title">
                    {translate("equipment.title")}
                </div>
                <div className="subtitle">
                    {translate("equipment.whatIsScyCTRL")}
                </div>
                <div className="description">
                    {translate("equipment.descriptionSkyCTRL")}
                </div>
                <div className="subtitle">
                    {translate("equipment.howMuchMoneyTitle")}
                </div>
                <div className="description">
                    {translate("equipment.howMuchMoneyDescription")}
                </div>
            </div>
            <div className="image">
                <div>
                    <img src={system} rel="preload" />
                </div>
            </div>
        </div>
    );
}

export default Equipment;