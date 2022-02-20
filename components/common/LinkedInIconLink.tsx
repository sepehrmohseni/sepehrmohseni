import * as React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButtonLink from './IconButtonLink';

import { IconButtonProps, useTheme } from '@mui/material';
interface InstagramIconLinkProps extends IconButtonProps {
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

const InstagramIconLink: React.FunctionComponent<InstagramIconLinkProps> = (
  props
) => {
  const {
    anchorStyles,
    href = 'https://www.linkedin.com/in/sepehr-mohseni/',
    iconColor = 'inherit',
    iconSize = 'inherit',
    ...otherProps
  } = props;
  const theme = useTheme();

  return (
    <IconButtonLink aria-label='Instagram button' href={href} {...otherProps}>
      <LinkedInIcon
        style={{
          color: '0072b1',
        }}
        fontSize={iconSize}
      />
    </IconButtonLink>
  );
};

export default InstagramIconLink;
