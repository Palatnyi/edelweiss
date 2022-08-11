import React from 'react';
import partner_bejet from '../../images/partner_bejet.png';
import { useTranslations } from '../../hooks';
import './Partners.scss';

function Partners() {
  const translate = useTranslations();

  return (
    <div className="partners">
      <div className="label">
        {translate('partners.label')}
      </div>

      <div className="partners_holder">
        <div className='partner partner_bejet'>
          <img src={partner_bejet} alt="" className="" />
        </div>
      </div>
    </div>
  )
}

export default Partners;