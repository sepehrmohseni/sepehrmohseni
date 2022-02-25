import * as React from 'react';

import {
  Box,
  BoxProps,
  Card,
  CardProps,
  CardContent,
  CardContentProps,
  Typography,
  styled,
} from '@mui/material';

import TextLink from '../common/TextLink';
import GitHubIconLink from '../common/GithubIconLink';
import LinkedInIconLink from '../common/LinkedInIconLink';
import EmailIconLink from '../common/EmailIconLink';
// custom context
import ConstantsContext from '../../utils/context/constantsContext';

interface FooterProps {}

const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
  margin: '1rem',
  padding: '1rem',
  [theme.breakpoints.up('sm')]: {
    margin: '2rem',
    padding: '2rem',
  },
}));

const CustomCardContent = styled(CardContent)<CardContentProps>(
  ({ theme }) => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0.5rem',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
    a: {
      marginBottom: '1rem',
      [theme.breakpoints.up('sm')]: {
        marginBottom: 0,
        marginLeft: '0.5rem',
        marginRight: '0.5rem',
      },
    },
  })
);

const Footer: React.FunctionComponent<FooterProps> = (props) => {
  const { navLinks } = React.useContext(ConstantsContext);
  navLinks?.sort((a, b) => (a.order > b.order ? 1 : -1));

  return (
    <>
      <CustomCard>
        <CustomCardContent>
          {navLinks!.map((navLink, index) => (
            <TextLink key={navLink.label + index} href={navLink.href}>
              {navLink.label}
            </TextLink>
          ))}
        </CustomCardContent>
        <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
          <GitHubIconLink />
          <LinkedInIconLink />
          <EmailIconLink />
        </CardContent>
      </CustomCard>
      <Typography component='p' variant='body1' textAlign='center'>
        کدنویسی با ❤️ توسط{' '}
        <TextLink href='https://sepehrmohseni.com'>سپهر محسنی</TextLink>
      </Typography>
    </>
  );
};

export default Footer;
