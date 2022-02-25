import * as React from 'react';
// next
import { useRouter } from 'next/router';

import {
  AppBar,
  AppBarProps,
  Box,
  BoxProps,
  Container,
  Grow,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  ToolbarProps,
  styled,
  useTheme,
  Grid,
} from '@mui/material';
import { grey } from '@mui/material/colors';

import NameLogo from './NameLogo';
import ButtonLink from './ButtonLink';
import MenuToggler from './MenuToggler';
import ConstantsContext from '../../utils/context/constantsContext';
import useOnClickOutside from '../../utils/hooks/useOnClickOutside';
import ComponentsContext from '../../utils/context/componentsContext';

interface CustomAppBarProps {}

const CustomAppBarRoot = styled(AppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  // backgroundColor: theme.palette.background.default
}));

const LinkContainer = styled(Box)<BoxProps>(({ theme }) => ({
  marginLeft: theme.direction === 'ltr' ? 'auto' : 'none',
  marginRight: theme.direction === 'rtl' ? 'auto' : 'none',
}));

const LinksBox = styled(Box)<BoxProps>(({ theme }) => ({
  '& > :not(a:first-of-type)': {
    marginLeft: '0.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const CustomToolbar = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    padding: 0,
  },
}));

const CustomAppBar: React.FunctionComponent<CustomAppBarProps> = (props) => {
  const [dropdownState, setDropdownState] = React.useState(false);
  const { containerMaxWidth = 'lg' } = React.useContext(ComponentsContext);
  const { navLinks } = React.useContext(ConstantsContext);
  navLinks?.sort((a, b) => (a.order > b.order ? 1 : -1));

  const appBarRef = React.useRef(null);
  const handleClickOutside = () => {
    if (dropdownState) setDropdownState(false);
  };

  useOnClickOutside(appBarRef, handleClickOutside);

  const router = useRouter();
  const handleDropdownItemClick = (href: string) => {
    setDropdownState(false);
    router.push(href);
  };

  const {
    palette: { background },
    shadows,
  } = useTheme();

  return (
    <Box sx={{flexGrow: 1}}>
      <CustomAppBarRoot position='absolute' ref={appBarRef}>
        <Container maxWidth={containerMaxWidth}>
          <CustomToolbar>
            <NameLogo
              bgColor={'#232526'}
              color={grey[300]}
              name='sepehrmohseni.com'
              onClick={() => router.push('/')}
            />

            <LinkContainer sx={{ marginLeft: 'auto' }}>
              <LinksBox>
                {navLinks?.map((navLink, index) => (
                  <ButtonLink
                    key={navLink.label + index + navLink.href}
                    href={navLink.href}
                    {...navLink.buttonProps}
                  >
                    {navLink.label}
                  </ButtonLink>
                ))}
              </LinksBox>
              <MenuToggler
                color='info'
                onClick={() => setDropdownState(!dropdownState)}
                open={dropdownState}
                sx={{ display: { sm: 'none' } }}
              />
            </LinkContainer>
          </CustomToolbar>
        </Container>
        <Box
          sx={{
            backgroundColor: background.default,
            margin: 0,
            transition: 'box-shadow 0.3s ease-in-out',
            boxShadow: dropdownState ? '0px 6px 4px 0px rgba(0,0,0,0.12)' : '',
            WebkitBoxShadow: dropdownState
              ? '0px 6px 4px 0px rgba(0,0,0,0.12)'
              : '',
          }}
        >
          <Container maxWidth={containerMaxWidth}>
            <List component='div'>
              {navLinks?.map((navLink, index) => (
                <Grow
                  in={dropdownState}
                  key={navLink.label + index}
                  style={{ transformOrigin: 'center left' }}
                  {...(dropdownState ? { timeout: index * 300 } : {})}
                  unmountOnExit
                >
                  <ListItemButton
                    onClick={() => handleDropdownItemClick(navLink.href)}
                    sx={{
                      borderRadius: '4px',
                      '&: hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: 'inherit',
                        fontSize: 'large',
                        minWidth: '2rem',
                      }}
                    >
                      {navLink.Icon}
                    </ListItemIcon>
                    <ListItemText
                      sx={{ textAlign: 'right' }}
                      primary={navLink.label}
                    />
                  </ListItemButton>
                </Grow>
              ))}
            </List>
          </Container>
        </Box>
      </CustomAppBarRoot>
    </Box>
  );
};

export default CustomAppBar;
