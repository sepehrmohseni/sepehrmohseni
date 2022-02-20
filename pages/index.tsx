import * as React from 'react';

import About from '../components/section/About';
import HireMe from '../components/section/HireMe';
import HomeHero from '../components/section/HomeHero';
import MainLayout from '../components/layout/MainLayout';
import RecentProjects from '../components/section/RecentProjects';
import Skills from '../components/section/Skills';
// custom context
import ConstantsContext from '../utils/context/constantsContext';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { pages } = React.useContext(ConstantsContext);

  return (
    <>
      <MainLayout pageData={pages!.home}>
        <HomeHero />
        <About />
        <Skills />
        <RecentProjects />
        <HireMe />
      </MainLayout>
    </>
  );
};

export default Home;
