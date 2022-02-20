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
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
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
  imageAlt: string;
  imageSrc: string;
  title: string;
  likes: number;
  onButtonClick?: () => void;
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
  const { imageAlt, imageSrc, likes, title, onButtonClick, ...otherProps } =
    props;
  const [isLoaded, setIsLoaded] = React.useState(false);
  const {
    palette: { primary },
  } = useTheme();

  return (
    <CustomCard {...otherProps}>
      <ImageContainer>
        <Image
          alt={imageAlt}
          src={imageSrc}
          layout='fill'
          objectFit='cover'
          objectPosition='top center'
          onLoad={() => setIsLoaded(true)}
          quality={30}
        />
        {!isLoaded && (
          <Skeleton
            variant='rectangular'
            sx={{ backgroundColor: primary.main, height: '100%' }}
          />
        )}
      </ImageContainer>
      <CardContent>
        <Typography component='h3' variant='h6' textAlign='center'>
          {isLoaded ? (
            title
          ) : (
            <Skeleton sx={{ backgroundColor: primary.main }} />
          )}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <List>
          <ListItem>
            <ListItemIcon sx={{ minWidth: 'auto', marginRight: '0.5rem' }}>
              <Icon color='primary' sx={{ display: 'flex' }}>
                <FontAwesomeIcon
                  icon={faReact}
                  style={{
                    color: '#61DAFB',
                    fontSize: '1rem',
                  }}
                />
              </Icon>
            </ListItemIcon>
            <ListItemText>
              {isLoaded ? null : (
                <Skeleton
                  sx={{ backgroundColor: primary.main, width: '2rem' }}
                />
              )}
            </ListItemText>
          </ListItem>
        </List>
        <CustomButton
          disableRipple
          variant='text'
          color='inherit'
          onClick={onButtonClick}
          sx={{ marginLeft: 'auto' }}
          endIcon={<ChevronRightIcon />}
        >
          more
        </CustomButton>
      </CardActions>
    </CustomCard>
  );
};

export default ProjectCard;
