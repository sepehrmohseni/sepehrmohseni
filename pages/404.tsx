import * as React from 'react';

import { Box, Typography, useTheme } from '@mui/material';

import CenterBox from '../components/common/CenterBox';
import TextLink from '../components/common/TextLink';

interface Custom404Props {}

const Custom404: React.FunctionComponent<Custom404Props> = (props) => {
  const theme = useTheme()
  return (
    <CenterBox padding='1rem' flexDirection='column'>
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Typography component='p' variant='h5'>
          صفحه مورد نظر پیدا نشد.
        </Typography>
      </Box>
      <br />
      <TextLink
        href='/'
        style={{
          position: 'absolute',
          bottom: '10%',
        }}
      >
        بازگشت به صفحه اصلی&nbsp; &larr;
      </TextLink>
    </CenterBox>
  );
};

export default Custom404;
