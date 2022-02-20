import * as React from 'react';
import IconButtonLink from './IconButtonLink';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import { IconButtonProps, useTheme } from '@mui/material';
interface TwitterIconLinkProps extends IconButtonProps {
  anchorStyles?: React.CSSProperties;
  href?: string;
  iconColor?:
    | 'inherit'
    | 'action'
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
  iconSize?: 'inherit' | 'large' | 'medium' | 'small' | undefined;
}

const TwitterIconLink: React.FunctionComponent<TwitterIconLinkProps> = (
  props
) => {
  const {
    anchorStyles,
    href = 'mailto:sepmoh.97@gmail.com',
    iconColor = 'inherit',
    iconSize = 'inherit',
    ...otherProps
  } = props;
  const theme = useTheme();

  return (
    <IconButtonLink aria-label='Twitter button' href={href} {...otherProps}>
      <AlternateEmailIcon
        style={{
          color: '#EA4335',
        }}
        fontSize={iconSize}
      />
    </IconButtonLink>
  );
};

export default TwitterIconLink;
