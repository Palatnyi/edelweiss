import React, { useState } from 'react';
import close from './images/close.png'
import hamburger from './images/hamburger.png'

import './App.scss';

function Edelweiss() {
  const [showHamburger, toggleShowHamburger] = useState(false);
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
        <div className="communication"></div>
        <div className="text"></div>
        <div className="donate"></div>

      </div>
    </div>
  );
}

export default Edelweiss;


// // import logo from './logo.svg';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }