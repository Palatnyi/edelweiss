import React from 'react';
import { useTranslations } from '../../hooks';
import './AboutWar.scss';

function AboutWar() {
    const translate = useTranslations();

    return (
        <div className="about-war" id="about">
            <div className="image"> </div>
            <div className="text">
                <div className="label">
                    {translate("aboutWar.title")}
                </div>
                <div className="description">
                    {translate("aboutWar.description")}
                </div>
            </div>

        </div>
    );
}

export default AboutWar;