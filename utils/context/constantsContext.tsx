import * as React from 'react';
// data
import navLinks from './navLinks';
import pages from './pages';
import projectsData, { Project } from './projectsData';
import blogPosts from './blogPostsData';

import { NavLink } from './navLinks';
import { Pages } from './pages';
import { BlogPost } from '../../types/blogPosts';

interface ContextProps {
  navLinks?: NavLink[];
  pages?: Pages;
  projects?: Project[];
  blogPosts?: BlogPost[];
}

const context: ContextProps = {
  navLinks,
  pages,
  projects: projectsData,
  blogPosts,
};

const ConstantsContext = React.createContext(context);

export default ConstantsContext;
