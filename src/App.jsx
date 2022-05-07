import React, { useState } from 'react';

import axios from 'axios';
import CONFIG from './config.js';
import { Helmet } from "react-helmet";
import Dropdown from 'react-dropdown';
import { useTranslations } from './hooks';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import logEdelweissEvent from './analytics.js';
import { useNavigate } from 'react-router-dom';
import ReactCountryFlag from "react-country-flag";
import { BallTriangle } from "react-loader-spinner";
import Donate from './components/Donate/Donate.jsx';
import DonationDialog from './components/DonationDialog/DonationDialog.jsx';
import OtherFundraising from './components/OtherFundraising/OtherFundRaising.jsx';
import DonateProgressBar from './components/DonateProgressBar/DonateProgressBar.jsx';

import close from './images/close.png';
import system from './images/system.jpg';
import linkedin from './images/linkedin.png';
import fb from './images/facebook-social.png'
import hamburger from './images/hamburger.png';
import instagram from './images/instagram-social.png'

import dima from './images/dima.jpg';
import vlad from "./images/vlad.jpg";
import logo from './images/logo.png';
import youra from './images/youra.jpg';
import anton from './images/anton.jpg';
import oksana from './images/oksana.jpeg';
import kostya from './images/kostya.jpeg';
import andrey from './images/andrey.jpeg';
import liubov from './images/liubov.jpeg';
import oleksii from './images/oleksii.jpeg';
import shatilov from './images/shatilov.jpg';
import dan from './images/dan.jpeg';

import './App.scss';
import 'react-dropdown/style.css';

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

function Header() {
  const [showHamburger, toggleShowHamburger] = useState(true);
  const icon = showHamburger ? hamburger : close;

  const navigate = useNavigate();
  const translate = useTranslations();
  const onChange = ({ value }) => {
    navigate(`/${value}`);
  };

  const options = translate("header.languageSelector.options");
  const languages = translate("header.languageSelector.languages");
  const mobileOptions = translate("header.languageSelector.mobileOptions");
  const placeholder = translate("header.languageSelector.placeholder");
  const defaultOption = translate("header.languageSelector.defaultValue");

  const renderLanguageSelectorMobile = (options) => {


    return options.map(({ label, value, flag }) => {

      const onClick = () => {
        navigate(`/${value}`)
        toggleShowHamburger(true);
      };

      return (
        <div className={`lang ${value}`} onClick={onClick}>
          <span>
            {label}
          </span>
          <span>
            <ReactCountryFlag countryCode={flag} />
          </span>
        </div>
      );
    });
  }


  return (
    <>
      <div className="header-mobile">
        <div className="name">
          <img src={logo} alt="logo" rel="preload" />
        </div>
        <div className="icon" onClick={() => toggleShowHamburger(!showHamburger)}>
          <img src={icon} rel="preload" alt="mobile-header-icon" />
        </div>
      </div>

      {
        !showHamburger && <div className="mobile-menu">
          <div className="empty"></div>
          <div className="menu-holder">
            <div className="top">
              <div onClick={() => toggleShowHamburger(true)}><a href="#about">{translate("menu.aboutWar")}</a></div>
              <div onClick={() => toggleShowHamburger(true)}><a href="#team">{translate("menu.ourTeam")}</a></div>
              <div onClick={() => toggleShowHamburger(true)}><a href="#needs">{translate("menu.ourNeeds")}</a></div>
              <div onClick={() => toggleShowHamburger(true)}><a href="#donate">{translate("menu.donate")}</a></div>
            </div>

            <div className="bottom">
              <div className="lang-title">{languages}</div>
              {renderLanguageSelectorMobile(mobileOptions)}
            </div>
            <div className="social">
              <a href="https://www.facebook.com/dopomoga2022">
                <img src={fb} rel="preload" alt="fb" />
              </a>
              <a href="https://instagram.com/dopomoga2022ua?igshid=YmMyMTA2M2Y=">
                <img src={instagram} rel="preload" alt="instagram" />
              </a>
            </div>
          </div>
        </div>
      }

      <div className="header-desktop">

        <div className="name">
          <img src={logo} alt="logo" rel="preload" />
        </div>

        <div className="menu">
          <div><a href="#about">{translate("menu.aboutWar")}</a></div>
          <div><a href="#team">{translate("menu.ourTeam")}</a></div>
          <div><a href="#needs">{translate("menu.ourNeeds")}</a></div>
          <div><a href="#donate">{translate("menu.donate")}</a></div>
          <Dropdown
            options={options}
            onChange={onChange}
            value={defaultOption}
            placeholder={placeholder}
            controlClassName="langSelector"
          />
        </div>
        <div className="social">
          <a href="https://www.facebook.com/dopomoga2022">
            <img src={fb} alt="" rel="preload" />
          </a>
          <a href="https://instagram.com/dopomoga2022ua?igshid=YmMyMTA2M2Y=">
            <img src={instagram} alt="" rel="preload" />
          </a>
        </div>
      </div>
    </>
  );
}

function Welcome({ openDonationDialog }) {
  const translate = useTranslations();

  return (
    <div className="welcome">
      <div className="opacity"></div>
      <div className="communication">
        {translate("welcome.communication")}
        <div className="text">
          {translate("welcome.description")}
        </div>
        <Donate onClick={openDonationDialog} />
      </div>
    </div>
  );
}

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

function Equipment({ openDonationDialog }) {
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

function Footer() {
  const translate = useTranslations();

  return (
    <div className="footer">
      <div className="left">
        <div><a href="#about">{translate("menu.aboutWar")}</a></div>
        <div><a href="#team">{translate("menu.ourTeam")}</a></div>
        <div><a href="#needs">{translate("menu.ourNeeds")}</a></div>
        <div><a href="#donate">{translate("menu.donate")}</a></div>
      </div>
      <div className="right">
        <div>{translate("footer.contactUs")}</div>
        <div className="skip-style">
          {translate("footer.email")}
        </div>
        <div className="hidden"><br /></div>
        <div>{translate("footer.ukraine")} {new Date().getFullYear()}</div>
      </div>
    </div>
  );
}

function Member({ member }) {
  return (
    <div className="member">
      <div className="imgHolder">
        <img className="image" src={member.src} alt="" rel="preload" />
      </div>
      <div className="name">{member.name}</div>
      <div className="role">{member.role}</div>
      <div className="social">
        {member.linkedin && <div className="linkedin">
          <img src={linkedin} onClick={() => { window.open(member.linkedin, "_blank") }} rel="preload" />
        </div>}
      </div>
    </div>
  );
}

function TeamMembers({ members = [] }) {
  return (
    <div className="members">
      {members.map(member => <Member key={member.name} member={member} />)}
    </div>
  );
}

function Team() {
  const translate = useTranslations();

  const teamMembers = [
    {
      src: oksana,
      name: translate("teamMembers.oksana.name"),
      role: translate("teamMembers.oksana.role"),
      linkedin: 'https://www.linkedin.com/in/oksanaperimova/'
    },
    {
      src: liubov,
      name: translate("teamMembers.liubov.name"),
      role: translate("teamMembers.liubov.role"),
      linkedin: 'https://www.linkedin.com/in/liubovrudnieva'
    },
    {
      src: shatilov,
      name: translate("teamMembers.shatilov.name"),
      role: translate("teamMembers.shatilov.role"),
      linkedin: 'https://www.linkedin.com/in/vadym-shatilov-04b685189',
      instagram: ''
    },
    {
      src: youra,
      name: translate("teamMembers.youra.name"),
      role: translate("teamMembers.youra.role"),
      linkedin: 'https://www.linkedin.com/in/yuriy-shelmuk-52080b70',
      instagram: ''
    },
    {
      src: dima,
      name: translate("teamMembers.dima.name"),
      role: translate("teamMembers.dima.role"),
      linkedin: 'https://www.linkedin.com/in/dmytro-savchenko-aa55691a/'
    },
    {
      src: andrey,
      name: translate("teamMembers.andrii.name"),
      role: translate("teamMembers.andrii.role"),
      linkedin: 'https://www.linkedin.com/in/andrii-palatnyi-9693b384/',
      instagram: ''
    },
    {
      src: dan,
      name: translate("teamMembers.dan.name"),
      role: translate("teamMembers.dan.role"),
      linkedin: 'https://www.linkedin.com/in/dan-fioletov-5a2530116/'
    },
    {
      src: oleksii,
      name: translate("teamMembers.oleksii.name"),
      role: translate("teamMembers.oleksii.role"),
      linkedin: 'https://www.linkedin.com/in/oleksii-palatnyi/',
      instagram: ''
    }, {
      src: vlad,
      name: translate("teamMembers.vlad.name"),
      role: translate("teamMembers.vlad.role"),
      linkedin: 'https://www.linkedin.com/in/vladkasianenko/'
    }, {
      src: kostya,
      name: translate("teamMembers.kostya.name"),
      role: translate("teamMembers.kostya.role"),
      linkedin: "https://www.linkedin.com/in/%D0%B8%D0%BB%D1%8C%D1%87%D0%B5%D0%BD%D0%BA%D0%BE-%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD-konstantin-ilchenko-1715a05b"
    },
    {
      src: anton,
      name: translate("teamMembers.anton.name"),
      role: translate("teamMembers.anton.role"),
      linkedin: 'https://www.linkedin.com/in/anton-pluzhnikov-5491a1a5/'
    }];

  return (
    <div className="team" id="team">
      <div className="title">
        {translate("ourTeam.title")}
      </div>
      <div className="description">
        {translate("ourTeam.description")}
      </div>
      <TeamMembers members={teamMembers} />

    </div>
  );
}

function Loader() {
  return (
    <div className="loader">
      <div className="loader-holder">
        <BallTriangle color="#06ace6" radius="5" />
      </div>
    </div>
  );
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Edelweiss() {
  const translate = useTranslations();
  const [showLoader, toggleLoader] = useState(false);
  const [showDialog, toggleShowDialog] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState(false);

  function onDonate(params) {

    console.log('LOG 2022:', CONFIG.PAYMENT_URL);

    toggleShowDialog(false);
    toggleLoader(true);

    axios.get(CONFIG.PAYMENT_URL, { params })
      .then(response => {
        if (response.data.url) {
          window.location.href = response.data.url;
        } else {
          setErrorSnackbar(true);
        }
      })
      .catch((e) => {
        console.log(e)
        toggleLoader(false);
        setErrorSnackbar(true);
      });
  }

  const openDonationDialog = (page) => {
    return () => {
      toggleShowDialog(true);
      logEdelweissEvent({
        page,
      }, 'CLICK_DONATE_BUTTON');

    };
  }

  return (
    <div className="edelweiss">
      <Helmet>
        <title>{translate("helmet.title")}</title>
        <meta name={translate("helmet.meta.name")} content={translate("helmet.meta.content")} />
      </Helmet>
      {showLoader && <Loader />}
      {showDialog && <DonationDialog onDonate={onDonate} onClose={() => toggleShowDialog(false)} />}
      <Header />
      <Welcome openDonationDialog={openDonationDialog('Welcome')} />
      <AboutWar />
      <Team />
      <Equipment openDonationDialog={openDonationDialog('Equipment')} />
      <DonateProgressBar>
        <Donate onClick={openDonationDialog('Equipment')} />
      </DonateProgressBar>
      <OtherFundraising openDonationDialog={openDonationDialog('OtherFundraising')} />
      <HelpMatters openDonationDialog={openDonationDialog('HelpMatters')} />
      <Footer />
      <Snackbar open={errorSnackbar} onClose={() => setErrorSnackbar(false)} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={() => setErrorSnackbar(false)} severity="error">
          {translate('payment.technicalIssue')}
        </Alert>
      </Snackbar>
    </div >
  );
}

export default Edelweiss;
