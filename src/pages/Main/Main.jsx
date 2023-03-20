import React from 'react';
import Team from '../../components/Team/Team.jsx';
import Media from '../../components/Media/Media.jsx';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Welcome from '../../components/Welcome/Welcome.jsx';
import WhatWeDo from '../../components/WhatWeDo/WhatWeDo.jsx';
import Partners from '../../components/Partners/Partners.jsx';
import HelpMatters from '../../components/HelpMatters/HelpMatters.jsx';
import AccomplishedProjects from '../../components/AccomplishedProjects/AccomplishedProjects.jsx'
import './Main.scss';
import 'react-dropdown/style.css';


function Edelweiss() {
  return (
    <div className="edelweiss">
      <Header />
      <Welcome />
      <Team />
      <Partners />
      <Media />
      <WhatWeDo />
      <AccomplishedProjects />
      <HelpMatters />

      <Footer />
    </div>
  );
}

export default Edelweiss;
