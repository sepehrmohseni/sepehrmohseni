import * as React from 'react';
// next
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'));

import {
  Box,
  BoxProps,
  Card,
  CardProps,
  CardActions,
  CardContent,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Skeleton,
  Typography,
  styled,
  useTheme,
  Grid,
  CardHeader,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJsSquare,
  faReact,
  faNode,
  faAppStore,
} from '@fortawesome/free-brands-svg-icons';

import CustomButton from './CustomButton';

interface ProjectCardProps extends CardProps {
  title: string;
  url?: string;
  summary?: string;
  stack: any;
}

const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
  img: {
    transition: 'all 0.5s ease-in-out',
  },
  '&: hover': {
    img: {
      transition: 'all 0.5s ease-in-out',
      transform: 'scale(1.4)',
      filter: 'blur(2px)',
      WebkitFilter: 'blur(2px)',
    },
  },
}));

const ImageContainer = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  margin: '1rem',
  height: '21rem',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
}));

const ProjectCard: React.FunctionComponent<ProjectCardProps> = (props) => {
  const { title, url, summary, stack, ...otherProps } = props;
  const [isLoaded, setIsLoaded] = React.useState(false);
  const {
    palette: { primary },
  } = useTheme();

  return (
    <CustomCard {...otherProps}>
      <CardHeader
        title={
          <Typography
            gutterBottom
            component='h1'
            variant='h5'
            textAlign='center'
          >
            {title}
          </Typography>
        }
        subheader={
          <Typography
            color='primary.light'
            component='h3'
            variant='subtitle1'
            fontWeight='bold'
            textAlign='center'
          >
            {summary}
          </Typography>
        }
      />
      <CardActions disableSpacing>
        <Grid container justifyContent='space-between'>
          <div
          >
            {stack.map((item: any, index: any) => (
              <Typography
                key={index}
                variant='subtitle2'
                color='secondary.light'
              >
                {item}
              </Typography>
            ))}
          </div>
          <CustomButton
          size="small"
            disableRipple
            variant='contained'
            color='primary'
            onClick={() => {
              window.open(url, '_blank');
            }}
          >
            &nbsp;جزئیات بیشتر
          </CustomButton>
        </Grid>
      </CardActions>
    </CustomCard>
  );
};

export default ProjectCard;
