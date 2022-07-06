import React from 'react';
import { useTranslations } from '../../hooks';
import { useNavigate } from 'react-router-dom';

import Dropdown from 'react-dropdown';
import Team from '../../components/Team/Team.jsx';
import Media from '../../components/Media/Media.jsx';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Button from '../../components/Button/Button.jsx';
import Welcome from '../../components/Welcome/Welcome.jsx';

import './Main.scss';
import 'react-dropdown/style.css';


function Edelweiss() {
  const navigate = useNavigate();
  const translate = useTranslations();
  const label = translate('header.subscribe');
  const options = translate("header.languageSelector.options");
  const placeholder = translate("header.languageSelector.placeholder");
  const defaultOption = translate("header.languageSelector.defaultValue");

  function renderDesktopActions() {
    const onChange = ({ value }) => {
      navigate(`/${value}`);
    };

    return (
      <React.Fragment>
        <Dropdown
          options={options}
          onChange={onChange}
          value={defaultOption}
          placeholder={placeholder}
          controlClassName="langSelector"
        />
        <Button label={label} />
      </React.Fragment>
    );

  }


  return (
    <div className="edelweiss">
      <Header
        desktopActions={renderDesktopActions()}
      />
      <Welcome />
      <Team />
      <Media />

      <Footer />
    </div>
  );
}

export default Edelweiss;
