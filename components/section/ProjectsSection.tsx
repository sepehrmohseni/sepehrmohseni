import * as React from 'react';
// next
import { useRouter } from 'next/router';

import { Box, Grid, Grow, Typography } from '@mui/material';

import ContainerGrid from '../common/ContainerGrid';
import TypingEffect from '../common/TypingEffect';
// custom context
import ConstantsContext from '../../utils/context/constantsContext';
import ProjectCard from '../common/ProjectCard';
import { calcArrayOfObj, sortArrayOfObj } from '../../utils/settingHandlers';
import Filter, { FilterOption } from '../common/Filter';
import { Project } from '../../utils/context/projectsData';

interface ProjectsSectionProps {}

const ProjectsSection: React.FunctionComponent<ProjectsSectionProps> = (
  props
) => {
  const { projects } = React.useContext(ConstantsContext);
  const [projectsToRender, setProjectsToRender] = React.useState(projects);
  const router = useRouter();

  const options = [
    { label: 'React.js', active: true },
    { label: 'Next.js' },
    { label: 'Express.js' },
    { label: 'React Native' },
  ];

  // const handleFilterOptionClick = (option: FilterOption) => {
  //   if (projectsToRender) {
  //     const newProjectsArray: Project[] = Object.assign([], projects);

  //     switch (option.label) {
  //       case 'React.js':
  //         const reactProjects = newProjectsArray.filter((project) =>
  //           project.category.includes('React')
  //         );
  //         setProjectsToRender(reactProjects);
  //         break;
  //       case 'Next.js':
  //         const nextProjects = newProjectsArray.filter((project) =>
  //           project.category.includes('Next')
  //         );
  //         setProjectsToRender(nextProjects);
  //         break;
  //       case 'Express.js':
  //         const expressProjects = newProjectsArray.filter((project) =>
  //           project.category.includes('Express')
  //         );
  //         setProjectsToRender(expressProjects);
  //         break;
  //       case 'React Native':
  //         const reactNativeProjects = newProjectsArray.filter((project) =>
  //           project.category.includes('React Native')
  //         );
  //         setProjectsToRender(reactNativeProjects);
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  // };

  return (
    <>
      <Typography
        component='h2'
        variant='h3'
        textAlign='center'
        marginTop='20%'
      >
        پروژه های من
      </Typography>
      <Box
        color='text.secondary'
        sx={{ textAlign: 'center', marginTop: '1rem' }}
      >
        <TypingEffect
          staticText='به عنوان برنامه نویس'
          text={['فرانت-اند', 'بک-اند', 'اپلیکیشن موبایل', 'فول استک']}
        />
      </Box>
      {/* <Filter onOptionClick={handleFilterOptionClick} options={options} /> */}
      <ContainerGrid
        justifyContent={
          projectsToRender?.length === 1 ? 'center' : 'flex-start'
        }
        sx={{
          padding: {
            xs: '0 1rem',
            sm: '0 2rem',
          },
        }}
      >
        {projectsToRender
          ? projectsToRender.map((project, index) => (
              <Grow
                in={true}
                key={project.title + index}
                timeout={(index + 1) * 500}
              >
                <Grid item xs={12} sm={6} md={4} xl={3}>
                  <ProjectCard
                    imageAlt={project.images[0].alt}
                    imageSrc={project.images[0].src}
                    title={project.title}
                    likes={calcArrayOfObj(project.images, 'likes')}
                    onButtonClick={() => router.push(`/projects/${project.id}`)}
                    sx={{
                      maxWidth: '21rem',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                  />
                </Grid>
              </Grow>
            ))
          : 'no project'}
      </ContainerGrid>
    </>
  );
};

export default ProjectsSection;
