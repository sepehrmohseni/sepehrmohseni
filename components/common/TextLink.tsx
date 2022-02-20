import * as React from 'react';
// next
import Link from 'next/link';

import CustomAnchor from './CustomAnchor';

interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const CustomAnchorWithRef = React.forwardRef<TextLinkProps, TextLinkProps>(
  ({ children, href, onClick, ...otherProps }, ref) => {
    return (
      <CustomAnchor href={href} onClick={onClick} {...otherProps}>
        {children}
      </CustomAnchor>
    );
  }
);

CustomAnchorWithRef.displayName = 'CustomAnchorWithRef';

const TextLink: React.FunctionComponent<TextLinkProps> = (props) => {
  const { children, href = '/', ...otherProps } = props;

  return (
    <Link href={href} passHref>
      <CustomAnchorWithRef>{children}</CustomAnchorWithRef>
    </Link>
  );
};

export default TextLink;
