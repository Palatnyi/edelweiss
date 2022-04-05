import React, { useState } from 'react';

import Dropdown from 'react-dropdown';
import { useTranslations } from './hooks'
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

import close from './images/close.png';
import system from './images/system.jpg';
import linkedin from './images/linkedin.png';
import instagram from './images/instagram.png';
import hamburger from './images/hamburger.png';

import dima from './images/dima.jpg';
import vlad from "./images/vlad.jpg";
import logo from './images/logo.png';
import youra from './images/youra.JPG';
import maksim from './images/maksim.png';
import kostya from './images/kostya.jpeg';
import andrey from './images/andrey.jpeg';
import oleksii from './images/oleksii.jpeg';
import shatilov from './images/shatilov.JPG';

import './App.scss';
import 'react-dropdown/style.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Requisite(props) {
  const { data, title } = props;

  return (
    <div className="requisite-holder">
      <div className="title">{title}</div>
      <div className="requisite">
        {data.map(item => {
          return (
            <div className="requisite-value">
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

  const otherWays = translate("requisities.requisitiesTypes.otherWays");
  const otherWaysTitle = translate("requisities.requisitiesTypes.otherWaysTitle");

  return (
    <div className="donate-requisities">
      <Requisite data={ibanUAH} title={ibanUahTitle} />
      <Requisite data={ibanUSD} title={ibanUsdTitle} />
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
      return (
        <div className={`lang ${value}`} onClick={() => navigate(`/${value}`)}>
          <span>
            {label}
          </span>
          <span>
            🇺{flag}
          </span>
        </div>
      );
    });
  }


  return (
    <>
      <div className="header-mobile">
        <div className="name">
          <img src={logo} alt="logo" />
        </div>
        <div className="icon" onClick={() => toggleShowHamburger(!showHamburger)}>
          <img src={icon} />
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
          </div>
        </div>
      }

      <div className="header-desktop">

        <div className="name">
          <img src={logo} alt="logo" />
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
      </div>
    </>
  );
}

function Welcome() {
  const translate = useTranslations();

  return (
    <div className="welcome">
      <div className="opacity"></div>
      <div className="communication">
        {translate("welcome.communication")}
        <div className="text">
          {translate("welcome.description")}
        </div>
        <div className="donate">
          {translate("welcome.donate")}
        </div>
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

function Equipment() {
  const translate = useTranslations();

  return (
    <div className="equipment" id="needs">
      <div className="text">
        <div className="title">
          {translate("equipment.title")}
        </div>
        {/* <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div> */}
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
        <Carousel autoPlay interval={2000} dynamicHeight showIndicators={false} showThumbs={false}>
          <div>
            <img src={system} />
          </div>
        </Carousel>
        <div className="donate">{translate("equipment.donate")}</div>
      </div>

      <div className="donate donate-mobile">{translate("equipment.donate")}</div>
    </div>
  );
}

function HelpMatters() {
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
        <div className="donate">
          {translate("requisities.donateDirectly")}
        </div>
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
        <img className="image" src={member.src} alt="" />
      </div>
      <div className="name">{member.name}</div>
      <div className="role">{member.role}</div>
      <div className="social">
        {member.linkedin && <div className="linkedin">
          <img src={linkedin} onClick={() => { window.open(member.linkedin, "_blank") }} />
        </div>}
        {member.instagram && <div className="instagram">
          <img src={instagram} />
        </div>}
      </div>
    </div>
  );
}

function TeamMembers({ members = [] }) {
  return (
    <div className="members">
      {members.map(member => <Member member={member} />)}
    </div>
  );
}

function Team(props) {
  const translate = useTranslations();

  const teamMembers = [
    {
      src: shatilov,
      name: translate("teamMembers.shatilov.name"),
      role: translate("teamMembers.shatilov.role"),
      linkedin: 'https://www.linkedin.com/in/andrey-palatnyi-9693b384/',
      instagram: ''
    },
    {
      src: youra,
      name: translate("teamMembers.youra.name"),
      role: translate("teamMembers.youra.role"),
      // linkedin: 'https://www.linkedin.com/in/andrey-palatnyi-9693b384/',
      instagram: ''
    },
    {
      src: andrey,
      name: translate("teamMembers.andrii.name"),
      role: translate("teamMembers.andrii.role"),
      linkedin: 'https://www.linkedin.com/in/andrey-palatnyi-9693b384/',
      instagram: ''
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
    }, {
      src: maksim,
      name: translate("teamMembers.maksim.name"),
      role: translate("teamMembers.maksim.role"),
      linkedin: 'https://www.linkedin.com/in/maksim-kolomiets/'
    }, {
      src: dima,
      name: translate("teamMembers.dima.name"),
      role: translate("teamMembers.dima.role"),
      linkedin: 'https://www.linkedin.com/in/dmytro-savchenko-aa55691a/'
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

function Edelweiss() {

  return (
    <div className="edelweiss">
      <Header />
      <Welcome />
      <AboutWar />
      <Team />
      <Equipment />
      <HelpMatters />
      <Footer />
    </div>
  );
}

export default Edelweiss;
