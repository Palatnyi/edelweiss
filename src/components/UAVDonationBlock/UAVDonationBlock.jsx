import React from 'react';
import Button from '../Button/Button.jsx';
import { getDonationUrl } from '../../utils';
import { useTranslations } from '../../hooks';
import ptt from '../../images/UNWAVE UAV-DEAD (Dopomoga 2022) digital.pdf';
import cover from '../../images/UAV-DEAD-photo4.jpg';
import './UAVDonationBlock.scss';


function UAVDonationBlock() {
    const translate = useTranslations();
    return (
        <div className={"uav_donation_block"} id={'uav_donation_block'}>
            <div className="left">
                <img src={cover} alt=""/>
            </div>
            <div className="right">
                <h2>
                    {translate("uavDonationBlock.title")}
                </h2>
                <div className={'description'} dangerouslySetInnerHTML={{__html: translate("uavDonationBlock.description")}}></div>

                <div className="buttons">
                    <Button onClick={getDonationUrl()}>{translate("uavDonationBlock.donate")}</Button>
                    <Button outlined onClick={() => window.open(ptt, '_blank')}>{translate("uavDonationBlock.seePTT")}</Button>
                </div>
            </div>

        </div>
    );
}

export default UAVDonationBlock;