import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

import close from './images/close.png'
import hamburger from './images/hamburger.png';
import sensor1 from './images/sensor1.png';
import sensor2 from './images/sensor2.png';
import sensor3 from './images/jammers.png';
import sensor4 from './images/disconector.png';
import sensor5 from './images/acces.png';
import sensor6 from './images/advance.png';

import './App.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function TeamMember(props) {
  return (
    <div className="team-member">
      <div></div>

    </div>
  );
}

function Edelweiss() {
  const [showHamburger, toggleShowHamburger] = useState(true);
  const icon = showHamburger ? hamburger : close;

  return (
    <div className="edelweiss">

      <div className="header-mobile">
        <div className="name">
          EDELWEISS
        </div>
        <div className="icon" onClick={() => toggleShowHamburger(!showHamburger)}>
          <img src={icon} />
        </div>
      </div>


      {!showHamburger && <div className="mobile-menu">
        <div className="empty"></div>
        <div className="menu-holder">
          <div>About the war</div>
          <div>Our team</div>
          <div>our needs</div>
          <div>Donate</div>
        </div>
      </div>
      }

      <div className="header-desktop">

        <div className="name">
          EDELWEISS
        </div>

        <div className="menu">
          <div>About the war</div>
          <div>Our team</div>
          <div>Our needs</div>
          <div>Donate</div>
        </div>
      </div>

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

      <div className="equipment">
        <div className="text">
          <div className="label">
            About the war
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
        <div className="image">
          <Carousel autoPlay interval={2000}>
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
        </div>

      </div>

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
