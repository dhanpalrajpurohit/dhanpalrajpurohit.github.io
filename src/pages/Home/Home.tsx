import React from 'react';
import AboutMe from '../AboutMe';
import Experience from '../Experience';
import Projects from '../Projects';
import Blogs from '../Blog';

import Header from "../../components/Header";

const Index = () => {


  return (
    <React.Fragment>
      <Header />
      <AboutMe />
      <Experience />
      <Projects/>
      <Blogs/>
    </React.Fragment>
  )
}

export default Index
