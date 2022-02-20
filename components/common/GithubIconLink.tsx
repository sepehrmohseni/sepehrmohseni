import * as React from 'react';
import IconButtonLink from './IconButtonLink';
import GitHubIcon from '@mui/icons-material/GitHub';

import { IconButtonProps, useTheme } from '@mui/material';
interface FacebookIconLinkProps extends IconButtonProps {
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

const FacebookIconLink: React.FunctionComponent<FacebookIconLinkProps> = (
  props
) => {
  const theme = useTheme();

  const {
    anchorStyles,
    href = 'https://github.com/sepehr-mohseni',
    iconColor = 'inherit',
    iconSize = 'inherit',
    ...otherProps
  } = props;

  return (
    <IconButtonLink aria-label='Github button' href={href} {...otherProps}>
      <GitHubIcon
        style={{
          color: theme.palette.common.white,
        }}
        fontSize={iconSize}
      />
    </IconButtonLink>
  );
};

export default FacebookIconLink;
