import * as React from 'react';

import { Box, Typography } from '@mui/material';
// dayjs
import dayjs from 'dayjs';

import { Project } from '../../utils/context/projectsData';
import CustomChip from '../common/CustomChip';
interface ProjectDetailsProps {
  project: Project;
  readTime?: number;
}

const ProjectDetails: React.FunctionComponent<ProjectDetailsProps> = (
  props
) => {
  const { project, readTime = 0, ...otherProps } = props;
  const { title, category, date } = project;

  const shortDate = date;

  return (
    <Box>
      <Typography component='h1' variant='h4' sx={{ marginBottom: '1rem' }}>
        {title}
      </Typography>
      <Typography component='p' variant='body1' sx={{ marginBottom: '0.5rem' }}>
        Read Time: {readTime} min
      </Typography>
      <Typography component='p' variant='body1' sx={{ marginBottom: '0.5rem' }}>
        Created at {shortDate}
      </Typography>
      <Box alignItems='center' display='flex'>
        {category.map((category, index) => (
          <CustomChip key={category + index} label={category} />
        ))}
      </Box>
    </Box>
  );
};

export default ProjectDetails;
