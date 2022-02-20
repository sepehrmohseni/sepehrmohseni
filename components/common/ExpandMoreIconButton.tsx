import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CustomIconButton from './CustomIconButton';

import { IconButtonProps } from '@mui/material';

interface ExpandMoreIconButtonProps extends IconButtonProps {
  open?: boolean;
}

const ExpandMoreIconButton: React.FunctionComponent<
  ExpandMoreIconButtonProps
> = (props) => {
  const { color = 'inherit', open = false, ...otherProps } = props;

  return (
    <CustomIconButton aria-label='Expand More' color={color} {...otherProps}>
      <ExpandMoreIcon
        color='inherit'
        fontSize='inherit'
        sx={{
          transition: 'transform 0.5s ease-in-out',
          transform: open ? 'rotate(-180deg)' : '',
        }}
      />
    </CustomIconButton>
  );
};

export default ExpandMoreIconButton;
