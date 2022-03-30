import React, { useState } from 'react';

import Dropdown from 'react-dropdown';
import { Carousel } from 'react-responsive-carousel';

import close from './images/close.png'
import hamburger from './images/hamburger.png';
import sensor1 from './images/sensor1.png';
import sensor2 from './images/sensor2.png';
import sensor3 from './images/jammers.png';
import sensor4 from './images/disconector.png';
import sensor5 from './images/acces.png';
import sensor6 from './images/advance.png';
import andrey from './images/andrey.jpeg'
import linkedin from './images/linkedin.png';
import instagram from './images/instagram.png';

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

  const options = [
    '🇬🇧', '🇪🇸', '🇺🇦'
  ];
  const defaultOption = options[0];

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

              <div>About the war</div>
              <div>Our team</div>
              <div>our needs</div>
              <div>Donate</div>
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
          <div>About the war</div>
          <div>Our team</div>
          <div>Our needs</div>
          <div>Donate</div>
          <Dropdown controlClassName="langSelector" options={options} onChange={() => { }} value={defaultOption} placeholder="Select an option" />;
        </div>
      </div>
    </>
  );
}

function Welcome() {
  return (
    <div className="welcome">
      <div className="opacity"></div>
      <div className="communication">communication matters
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div className="donate">
          Donate
        </div>
      </div>
    </div>
  );
}

function AboutWar() {
  return (
    <div className="about-war">
      <div className="image"> </div>
      <div className="text">
        <div className="label">
          About the war
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>

    </div>
  );
}

function Equipment() {
  return (
    <div className="equipment">
      <div className="text">
        <div className="title">
          About the war
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div className="subtitle">
          What is it?
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div className="subtitle">
          Why do we need it?
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
        <div className="donate">Donate</div>
      </div>

      <div className="donate donate-mobile">Donate</div>
    </div>
  );
}

function HelpMatters() {
  return (
    <div className="help-matters">
      <div className="title">
        Your help matters
      </div>
      <div className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde labore reiciendis quisquam ducimus pariatur mollitia soluta minus, ea autem natus quam quis itaque nihil temporibus vitae quas atque nostrum adipisci quod velit illo dolores odio! Sit commodi nihil quaerat?
      </div>
      <div className="requisities">
        Our requisites
      </div>

      <DonateRequisities />

      <div className="donate-btn-holder">
        <div className="donate">
          Donate directly
        </div>
      </div>
    </div>
  );
}

function Footer() {

  return (
    <div className="footer">
      <div className="left">
        <div>About the war</div>
        <div>Our team</div>
        <div>Our needs</div>
        <div>Donate</div>
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

  return (
    <div className="team">
      <div className="title">Out team</div>
      <div className="description">
        Generic statement about the team. We all used to be civillians, now we gathered to defent our motherland. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
      </div>
      {/* <TeamMembers members={teamMembers} /> */}
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

      {/* <div className="team">
        <div className="title">
          Our team
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis totam, mollitia exercitationem tempore possimus in velit minima aliquid repellat quae, animi assumenda pariatur fugit aut dolor inventore provident. Voluptatibus voluptates mollitia expedita molestias sequi deleniti maxime impedit voluptas illo distinctio vel similique ut saepe vero perferendis, eveniet ab vitae tempora.
        </div>

        <div className="team-holder">


        </div>
      </div> */}
    </div>
  );
}

export default Edelweiss;
