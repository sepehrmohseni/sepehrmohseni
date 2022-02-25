import * as React from 'react';
// next
import Image from 'next/image';

import {
  Box,
  BoxProps,
  Card,
  CardActions,
  CardActionsProps,
  CardProps,
  Grid,
  Skeleton,
  Typography,
  styled,
  CardContent,
  Collapse,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import GithubIconLink from '../common/GithubIconLink';
import LinkedInIconLink from '../common/LinkedInIconLink';
import EmailIconLink from '../common/EmailIconLink';
import ContainerGrid from '../common/ContainerGrid';
import ExpandMoreIconButton from '../common/ExpandMoreIconButton';

interface AboutProps {}

const ImageWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '21rem',
  [theme.breakpoints.up(350)]: {
    height: '26rem',
  },
  [theme.breakpoints.up('sm')]: {
    height: '50vh',
  },
  [theme.breakpoints.up('md')]: {
    height: '100%',
  },
}));

const CustomContainer = styled(Box)<BoxProps>(({ theme }) => ({
  scrollMarginTop: '1rem',
  [theme.breakpoints.up('sm')]: {
    scrollMarginTop: '2rem',
  },
}));

const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
  margin: '1rem',
  overflow: 'hidden',
  [theme.breakpoints.up('sm')]: {
    margin: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    height: 'fit-content',
  },
  [theme.breakpoints.up('lg')]: {
    height: '90vh',
  },
}));

const CustomCardActions = styled(CardActions)<CardActionsProps>(
  ({ theme }) => ({
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.up('lg')]: {
      position: 'absolute',
      bottom: 0,
    },
  })
);

const About: React.FunctionComponent<AboutProps> = (props) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);

  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));

  React.useEffect(() => {
    if (isUpMd) setShowMore(true);
    else setShowMore(false);
  }, [isUpMd]);

  return (
    <CustomContainer id='about'>
      <CustomCard>
        <ContainerGrid sx={{ marginTop: 0, height: '100%' }}>
          <Grid item xs={12} md={6} style={{ padding: 0 }}>
            <ImageWrapper>
              <Image
                alt='sepehr mohseni profile image'
                layout='fill'
                objectFit='cover'
                objectPosition='center center'
                onLoad={() => setIsLoaded(true)}
                src='/profile.jpg'
              />
              {!isLoaded && (
                <Skeleton
                  variant='rectangular'
                  sx={{
                    backgroundColor: 'currentcolor',
                    height: '100%',
                    position: 'absolute',
                    width: '100%',
                  }}
                />
              )}
            </ImageWrapper>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{ padding: '2rem', position: 'relative' }}
          >
            <Card
              sx={{ boxShadow: 'none', height: '100%', position: 'relative' }}
            >
              <Typography
                component='h2'
                variant='h5'
                fontWeight='bold'
                color='secondary'
              >
                من کی هستم؟
              </Typography>
              <CardContent>
                <Typography component='p' variant='body1'>
                  از بچگی دوس داشتم با کامپیوتر ها کار کنم. دانشجوی مهندسی
                  الکترونیک شدم تا بیشتر با سخت افزار کامپیوتر در ارتباط باشم.
                  بعدش برنامه نویسی به صورت حرفه ای رو خودم یادگرفتم و سراغ
                  جاوااسکریپت رفتم چون هر چی بخوام میتونم باهاش بسازم.
                </Typography>
                <Collapse
                  in={showMore}
                  sx={{
                    p: {
                      marginTop: '0.5rem',
                    },
                  }}
                  timeout='auto'
                  unmountOnExit
                >
                  <Typography component='p' variant='body1'>
                    من توسعه دهنده فول استک علاقه مند به ساخت نرم افزارهای Scalabale و کاربردی هستم.
                    برای توسعه فرانت از React.js, Next.js, Gatsby.js استفاده میکنم.
                    برای توسعه بک اند از Node.js, Express.js, MongoDB استفاده میکنم.
                    برای توسعه اپلیکیشن های کراس پلتفرم از React Native استفاده میکنم.
                    گاهی نیز در صورت نیاز سری به فریمورک Electron.js میزنم.
                  </Typography>
                </Collapse>
              </CardContent>
              <CustomCardActions disableSpacing>
                {!isUpMd && (
                  <ExpandMoreIconButton
                    open={showMore}
                    onClick={() => setShowMore(!showMore)}
                    sx={{
                      justifySelf: 'flex-start',
                    }}
                  />
                )}
                <div>
                  <GithubIconLink />
                  <LinkedInIconLink />
                  <EmailIconLink />
                </div>
              </CustomCardActions>
            </Card>
          </Grid>
        </ContainerGrid>
      </CustomCard>
    </CustomContainer>
  );
};

export default About;
