import React from 'react';
import { useTranslations } from '../../hooks';

import Button from '../Button/Button';
import Separator from '../Separator/Separator.jsx';

import mc_logo from '../../images/mc_logo.png'
import dou_logo from '../../images/dou_logo.png'
import fortune_logo from '../../images/fortune_logo.png';

import './Media.scss';

function Media() {
  const translate = useTranslations();
  const readLabel = translate('common.read');

  return (
    <div className="media" id="media">
      <div className="label">{translate("media.label")}</div>
      <div className="articles">
        <div className="fortune">
          <div className="opacity"></div>
          <div className="logo">
            <img src={fortune_logo} alt="" />
          </div>
          <div className="buttonHolder">
            <Button onClick={() => {
              window.open('https://fortune.com/2022/05/17/it-unit-ukraine-tech-engineers-against-russian-military/?fbclid=IwAR2JLenhJBEpJ-6jSPKycU0uh7K-aQBQ3esgNitx1ifjsNiOXv_-hcgEhZ4', '_blank');
            }} label={readLabel} />
          </div>

        </div>
        <div className="dou">
          <div className="opacity"></div>
          <div className="logo">
            <img src={dou_logo} alt="" />
          </div>
          <div className="buttonHolder">
            <Button onClick={() => {
              window.open('https://dou.ua/lenta/articles/it-platoon-in-ukrainian-forces/?from=fb-repost&fbclid=IwAR3cbTTfF3nUZ4QwZaQs5LfO-_4QVdkwJMCqsRr0jDsMQ67lLzfQ0-7Jewg', '_blank');

            }} label={readLabel} />
          </div>

        </div>
        <div className="mc">
          <div className="opacity"></div>
          <div className="logo">
            <img src={mc_logo} alt="" />
          </div>
          <div className="buttonHolder">
            <Button onClick={() => {
              window.open('https://mc.today/uk/ya-starij-doroslij-lev-teper-ya-ne-boyusya-smerti-istoriya-ajtivtsya-yakij-stav-do-lav-zsu/?fbclid=IwAR3OdfhiYGtRka-XHIieuLinoGlPvElk66EfPTIEir7avGVJ_c8IX0pdhmo', '_blank');

            }} label={readLabel} />
          </div>

        </div>
      </div>
      <Separator />
    </div>
  );
}

export default Media;