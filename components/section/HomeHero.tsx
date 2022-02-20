import * as React from 'react';
// next
import { useRouter } from 'next/router';

import { Box, Typography, useTheme, Button } from '@mui/material';
import CenterBox from '../common/CenterBox';
import TypingEffect from '../common/TypingEffect';
import ScrollDown from '../common/ScrollDown';

interface HomeHeroProps {}

const HomeHero: React.FunctionComponent<HomeHeroProps> = (props) => {
  const {
    palette: { info },
  } = useTheme();
  const router = useRouter();

  return (
    <CenterBox flexDirection='column'>
      <Typography component='p' variant='h5' color='text.secondary'>
        Hello, I&apos;m
      </Typography>
      <Typography component='h1' variant='h2' fontWeight='bold'>
        Sepehr Mohseni
      </Typography>
      <Box color='text.secondary'>
        <TypingEffect
          staticText='I code'
          text={['Front-End', 'Back-End', 'Mobile Apps']}
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
  );
};

export default HomeHero;
