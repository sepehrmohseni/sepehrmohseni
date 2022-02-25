import * as React from 'react';
// next
import { useRouter } from 'next/router';
import { Box, Typography, useTheme, Button } from '@mui/material';
import CenterBox from '../common/CenterBox';
import TypingEffect from '../common/TypingEffect';
import ScrollDown from '../common/ScrollDown';
import ParticleComponent from '../common/ParticleComponent';

interface HomeHeroProps {}

const HomeHero: React.FunctionComponent<HomeHeroProps> = (props) => {
  const {
    palette: { info },
  } = useTheme();
  const router = useRouter();

  return (
    <div>
        <ParticleComponent/>
      <CenterBox flexDirection='column'>
        <Typography component='p' variant='h5' color='text.secondary'>
          سلام من
        </Typography>
        <Typography
          align='center'
          component='h1'
          variant='h2'
          fontWeight='bold'
        >
          سپهر محسنی
        </Typography>
        <Typography component='p' variant='h5' color='text.secondary'>
          هستم
        </Typography>
        <br />
        <Box color='text.secondary'>
          <TypingEffect
            staticText='یک برنامه نویس'
            text={['فرانت-اند', 'بک-اند', 'اپلیکیشن موبایل', 'فول استک']}
          />
        </Box>
        <ScrollDown
          color={info.main}
          onClick={() => router.push('/#about')}
          sx={{
            bottom: '10%',
            cursor: 'pointer',
            position: 'absolute',
          }}
        />
      </CenterBox>
    </div>
  );
};

export default HomeHero;
