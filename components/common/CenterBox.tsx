import * as React from 'react';

interface CenterBoxProps extends React.CSSProperties {
  height?: string | number;
}

const CenterBox: React.FunctionComponent<CenterBoxProps> = (props) => {
  const { children, height = '100vh', ...otherProps } = props;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height,
        ...otherProps,
      }}
    >
      {children}
    </div>
  );
};

export default CenterBox;
