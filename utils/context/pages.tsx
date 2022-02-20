export interface Page {
  title?: string;
  description?: string;
}

export interface Pages {
  [key: string]: Page;
}

const pages: Pages = {
  home: {
    title: 'Sepehr Mohseni - Software Engineer',
    description:
      'Sepehr Mohseni is a full-stack software engineer with a passion for building scalable, maintainable and performant software.',
  },
  projects: {
    title: 'Projects',
    description:
      'You can see all my projects as a full-stack developer in this page.',
  },
  hireMe: {
    title: 'Hire me',
    description:
      'I am available as freelancer to do your projects, fill the form to contact to me.',
  },
};

export default pages;
