import * as React from 'react';

import MainLayout from '../components/layout/MainLayout';
import ProjectsSection from '../components/section/ProjectsSection';
// custom context
import ConstantsContext from '../utils/context/constantsContext';

import type { NextPage } from 'next';

const Projects: NextPage = (props) => {
  const { pages } = React.useContext(ConstantsContext);

  return (
    <MainLayout pageData={pages && pages.projects}>
      <ProjectsSection />
    </MainLayout>
  );
};

export default Projects;
