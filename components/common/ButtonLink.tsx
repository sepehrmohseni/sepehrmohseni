import * as React from 'react';
// next
import Link from 'next/link';

import CustomButton from './CustomButton';

import { ButtonProps } from '@mui/material';
interface ButtonLinkProps extends ButtonProps {
  href?: string;
}

const CustomButtonWithRef = React.forwardRef<ButtonLinkProps, ButtonLinkProps>(
  ({ children, ...otherProps }, ref) => (
    <CustomButton {...otherProps}>{children}</CustomButton>
  )
);

CustomButtonWithRef.displayName = 'CustomButtonWithRef';

const ButtonLink: React.FunctionComponent<ButtonLinkProps> = (props) => {
  const { children, href = '#', ref, ...otherProps } = props;

  return (
    <Link href={href} passHref>
      <CustomButtonWithRef {...otherProps}>{children}</CustomButtonWithRef>
    </Link>
  );
};

export default ButtonLink;
