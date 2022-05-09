import React from 'react';

import { useTranslations } from '../../../../hooks';
import './DonateRequisities.scss';

function Requisite(props) {
    const { data, title } = props;

    return (
        <div className="requisite-holder">
            <div className="title">{title}</div>
            <div className="requisite">
                {data.map(item => {
                    return (
                        <div className="requisite-value" key={item.value}>
                            <div className="title">{item.label}</div>
                            <div className="value">{item.value}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function DonateRequisities() {
    const translate = useTranslations();

    const ibanUAH = translate("requisities.requisitiesTypes.ibanUAH");
    const ibanUahTitle = translate("requisities.requisitiesTypes.ibanUahTitle");

    const ibanUSD = translate("requisities.requisitiesTypes.ibanUSD");
    const ibanUsdTitle = translate("requisities.requisitiesTypes.ibanUsdTitle");

    const ibanEUR = translate("requisities.requisitiesTypes.ibanEUR");
    const ibanEurTitle = translate("requisities.requisitiesTypes.ibanEurTitle");

    const otherWays = translate("requisities.requisitiesTypes.otherWays");
    const otherWaysTitle = translate("requisities.requisitiesTypes.otherWaysTitle");

    return (
        <div className="donate-requisities">
            <Requisite data={ibanUAH} title={ibanUahTitle} />
            <Requisite data={ibanUSD} title={ibanUsdTitle} />
            <Requisite data={ibanEUR} title={ibanEurTitle} />
            <Requisite data={otherWays} title={otherWaysTitle} />
        </div>
    );
}

export default DonateRequisities;