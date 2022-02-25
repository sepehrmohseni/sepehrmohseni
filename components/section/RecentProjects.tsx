import * as React from 'react';
// next
import { useRouter } from 'next/router';
// swiper
import { SwiperSlide } from 'swiper/react';

import { Box, BoxProps, Typography, styled } from '@mui/material';

import CustomSwiper from '../common/CustomSwiper';
import ProjectCard from '../common/ProjectCard';
// custom context
import ConstantsContext from '../../utils/context/constantsContext';
// utility
import { calcArrayOfObj } from '../../utils/settingHandlers';

interface RecentProjectsProps {}

const CustomWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  margin: '6rem 1rem',
  [theme.breakpoints.up('sm')]: {
    margin: '6rem 2rem',
  },
}));

const RecentProjects: React.FunctionComponent<RecentProjectsProps> = (
  props
) => {
  const [activeIndex, setActiveIndex] = React.useState<number>();
  const { projects } = React.useContext(ConstantsContext);
  const router = useRouter();

  return (
    <CustomWrapper>
      <Typography
        component='h2'
        variant='h4'
        sx={{
          textAlign: 'center',
          marginBottom: '3rem',
        }}
      >
        پروژه های اخیر
      </Typography>
      <CustomSwiper
        onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {projects ? (
          projects.map((project, index) => (
            <SwiperSlide
              key={index}
              style={{
                transform: index === activeIndex ? 'scale(1)' : 'scale(0.75)',
                transition: '0.2s all ease-in-out',
              }}
            >
              <ProjectCard
                title={project.title}
                url={project.url}
                summary={project.summary}
                stack={project.stack}
                sx={{
                  maxWidth: '21rem',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <p style={{ textAlign: 'center' }}>
              Currently, there is no project available to show.
            </p>
          </SwiperSlide>
        )}
      </CustomSwiper>
    </CustomWrapper>
  );
};

export default RecentProjects;
