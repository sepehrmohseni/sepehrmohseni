import * as React from 'react';

import { IconButtonProps } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import CustomIconButton from './CustomIconButton';

interface MenuTogglerProps extends IconButtonProps {
  open?: boolean;
}

const MenuToggler: React.FunctionComponent<MenuTogglerProps> = (props) => {
  const {
    color = 'primary',
    open = false,
    size = 'large',
    ...otherProps
  } = props;

  return (
    <CustomIconButton
      aria-label='Menu toggler'
      size={size}
      color={color}
      {...otherProps}
    >
      {open ? (
        <CloseIcon fontSize='inherit' color='inherit' />
      ) : (
        <MenuIcon fontSize='inherit' color='inherit' />
      )}
    </CustomIconButton>
  );
};

export default MenuToggler;
