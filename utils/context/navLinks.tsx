import React from 'react';
// mui icons
import ConstructionIcon from '@mui/icons-material/Construction';
import InfoIcon from '@mui/icons-material/Info';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import WorkIcon from '@mui/icons-material/Work';
import WorkspacesIcon from '@mui/icons-material/Workspaces';

import { ButtonProps, IconProps } from '@mui/material';
export interface NavLink {
  buttonProps?: ButtonProps;
  href: string;
  Icon: React.ReactNode;
  label: string;
  order: number;
  sidebarOrder?: number;
  sidebarVisible?: boolean;
}

const navLinks: NavLink[] = [
  {
    buttonProps: { color: 'info' },
    href: '/#about',
    Icon: <InfoIcon color='inherit' fontSize='inherit' />,
    label: 'درباره من',
    order: 1,
    sidebarVisible: false,
  },
  {
    buttonProps: { color: 'info' },
    href: '/#skills',
    Icon: <ConstructionIcon color='inherit' fontSize='inherit' />,
    label: 'توانایی ها',
    order: 2,
    sidebarVisible: false,
  },
  {
    buttonProps: { color: 'info' },
    href: '/#hireMe',
    Icon: <WorkIcon color='inherit' fontSize='inherit' />,
    label: 'تماس با من',
    order: 4,
    sidebarOrder: 3,
    sidebarVisible: true,
  },
];

export default navLinks;
