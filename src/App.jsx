import React, { useState } from 'react';

import Dropdown from 'react-dropdown';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import { useTranslations } from './hooks'

import close from './images/close.png';
import sensor5 from './images/acces.png';
import andrey from './images/andrey.jpeg';
import sensor1 from './images/sensor1.png';
import sensor2 from './images/sensor2.png';
import sensor6 from './images/advance.png';
import sensor3 from './images/jammers.png';
import linkedin from './images/linkedin.png';
import instagram from './images/instagram.png';
import hamburger from './images/hamburger.png';
import sensor4 from './images/disconector.png';

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
            <>
              <div className="name">{item.name + ':'}</div>
              <div className="adress">{item.requisite}</div>
            </>
          );
        })}
      </div>
    </div>
  );
}

function DonateRequisities() {
  const otherWaysData = [{
    name: 'Paypal',
    requisite: 'ololo@paypal.com;ALSKDNFAS,MND;AS,DN;AS,/MDNAS/,MDNAS'
  }];

  return (
    <div className="donate-requisities">
      <Requisite data={otherWaysData} title="other ways" />
      <Requisite data={otherWaysData} title="IBAN (USD)" />
      <Requisite data={otherWaysData} title="IBAN (USD)" />
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
  const defaultOption = translate("header.languageSelector.defaultValue");
  const placeholder = translate("header.languageSelector.placeholder");

  return (
    <>
      <div className="header-mobile">
        <div className="name">
          DOPOMOGA2022
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
              <div onClick={() => toggleShowHamburger(true)}><a href="#about">About the war</a></div>
              <div onClick={() => toggleShowHamburger(true)}><a href="#team">Our team</a></div>
              <div onClick={() => toggleShowHamburger(true)}><a href="#needs">Our needs</a></div>
              <div onClick={() => toggleShowHamburger(true)}><a href="#donate">Donate</a></div>
            </div>

            <div className="bottom">
              <div className="lang-title">Languages:</div>
              <div className="lang ua">
                <span>
                  українська
                </span>
                <span>
                  🇺🇦
                </span>
              </div>
              <div className="lang en">
                <span>
                  english
                </span>
                <span>
                  🇬🇧
                </span>
              </div>
              <div className="lang es">
                <span>
                  spanish
                </span>
                <span>
                  🇪🇸
                </span>
              </div>
            </div>
          </div>
        </div>
      }

      <div className="header-desktop">

        <div className="name">
          DOPOMOGA2022
        </div>

        <div className="menu">
          <div><a href="#about">About the war</a></div>
          <div><a href="#team">Our team</a></div>
          <div><a href="#needs">Our needs</a></div>
          <div><a href="#donate">Donate</a></div>
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
            <img src={sensor1} />
          </div>
          <div>
            <img src={sensor2} />
          </div>
          <div>
            <img src={sensor3} />
          </div>
          <div>
            <img src={sensor4} />
          </div>
          <div>
            <img src={sensor5} />
          </div>
          <div>
            <img src={sensor6} />
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
          <div><a href="#about">About the war</a></div>
          <div><a href="#team">Our team</a></div>
          <div><a href="#needs">Our needs</a></div>
          <div><a href="#donate">Donate</a></div>
      </div>
      <div className="right">
        <div>Contact us</div>
        <div className="skip-style">
          ololo@gmail.com
        </div>
        <div className="hidden"><br /></div>
        <div>Ukraine {new Date().getFullYear()}</div>
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
      <div className="name">{member.name} , {member.age}</div>
      <div className="role">{member.role}</div>
      <div className="social">
        <div className="linkedin">
          <img src={linkedin} />
        </div>
        <div className="instagram">
          <img src={instagram} />
        </div>
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
  const teamMembers = [{
    src: andrey,
    name: 'Аndrii Palatnyi',
    age: 30,
    role: 'Frontend engineer'
  },
  {
    src: andrey,
    name: 'Аndrii',
    age: 30,
    role: 'Frontend engineer'
  }, {
    src: andrey,
    name: 'Аndrii',
    age: 30,
    role: 'Frontend engineer'
  }, {
    src: andrey,
    name: 'Аndrii',
    age: 30,
    role: 'Frontend engineer'
  }, {
    src: andrey,
    name: 'Аndrii',
    age: 30,
    role: 'Frontend engineer'
  },
  {
    src: andrey,
    name: 'Аndrii',
    age: 30,
    role: 'Frontend engineer'
  }, {
    src: andrey,
    name: 'Аndrii',
    age: 30,
    role: 'Frontend engineer'
  }, {
    src: andrey,
    name: 'Аndrii',
    age: 30,
    role: 'Frontend engineer'
  }];

  const translate = useTranslations();
  return (
    <div className="team" id="team">
      <div className="title">
        {translate("ourTeam.title")}
      </div>
      <div className="description">
        {translate("ourTeam.description")}
      </div>
      <TeamMembers members={teamMembers.slice(0, teamMembers.length / 2)} />
      <TeamMembers members={teamMembers.slice(teamMembers.length / 2, teamMembers.length)} />

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
