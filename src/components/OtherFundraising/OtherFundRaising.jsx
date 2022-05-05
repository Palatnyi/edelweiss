import React from 'react';
import { useTranslations } from '../../hooks';

import nvb from '../../images/nvb.png';
import mobileRadio from '../../images/mobileRadio.png';
import medicine from '../../images/medicine.png';

import './OtherFundraising.scss';

function Item({ src, title, description, donate }) {
    const translate = useTranslations();

    return (
        <div className="item">
            <img src={src} alt={title} />
            <div className="title">
                {title}
            </div>
            {description && <div className="description">
                {description}
            </div>}
            <div className="donateHolder" onClick={donate}>
                <div className="donate" onClick={donate}>
                    <div className="btn" >
                        {translate('otherFundraising.donate')}
                    </div>
                </div>
            </div>
        </div>
    );
}

function OtherFundraising({ openDonationDialog }) {
    const translate = useTranslations();
    const items = [
        {
            src: medicine,
            title: translate('otherFundraising.medicine.title'),
            description: translate('otherFundraising.medicine.description')
        },
        {
            src: nvb,
            title: translate('otherFundraising.nvb.title'),
            description: translate('otherFundraising.nvb.description')
        },
        {
            src: mobileRadio,
            title: translate('otherFundraising.mobileRadio.title'),
            description: translate('otherFundraising.mobileRadio.description')
        }
    ];

    return (
        <div className="otherFundraising">
            <div className="title">
                {translate('otherFundraising.title')}
            </div>
            <div className="description">
                {translate('otherFundraising.description')}
            </div>
            <div className="subtitle">
                {translate('otherFundraising.subtitle')}
            </div>
            <div className="items">
                {items.map(item => <Item {...item} donate={openDonationDialog} />)}
            </div>
        </div>
    );
}

export default OtherFundraising;