import React from 'react';
import Build from '../../components/build';
import DoesBrand from '../../components/doesbrand';
import Capabilities from '../../components/capabilities';
import FatimaFigma from '../../components/fatimafigma';
import Trustly from '../../components/trustly';
import Projects from '../../components/projects';
import FourSteps from '../../components/foursteps';
import Contact from '../../components/contact';

const Home = () => {
  return (

    <div>
      <Build/>
      <DoesBrand/>
      <Capabilities/>
      <FatimaFigma/>
      <Trustly/>
      <Projects/>
      <FourSteps/>
      <Contact/>
    </div>
    )
};

export default Home;
