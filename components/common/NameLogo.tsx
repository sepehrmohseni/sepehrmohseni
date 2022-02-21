import * as React from 'react';
// csstype
import { Property } from 'csstype';

interface NameLogoProps {
  bgBorder?: Property.BorderRadius;
  bgColor?: Property.BackgroundColor;
  color?: Property.Color;
  fontSize?: Property.FontSize;
  name?: string;
  onClick?: () => void;
}

const NameLogo: React.FunctionComponent<NameLogoProps> = (props) => {
  const {
    bgBorder = 4,
    bgColor = 'wheat',
    color = 'inherit',
    fontSize = 'inherit',
    name = 'Name',
    onClick,
  } = props;
  return (
    <div
      onClick={onClick && onClick}
      style={{
        // alignItems: 'center',
        // cursor: 'pointer',
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'center',
        //  position: 'relative',
        // width: 'fit-content',
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        position: "absolute",
        left: 10,
      }}
    >
      <div
        style={{
          // alignItems: 'center',
          // backgroundColor: bgColor,
          // borderRadius: bgBorder,
          // display: 'flex',
          // height: 30,
          // width: 30,
          width: 30,
          height: 30,
          backgroundColor: bgColor,
          borderRadius: bgBorder,
          marginLeft: -160
        }}
      />
      <p
        style={{
          // color,
          // fontSize,
          // fontWeight: 'bold',
          // left: 10,
          // position: 'absolute',
          // whiteSpace: 'nowrap',
          color,
          fontSize,
          fontWeight: 'bold',
        }}
      >
        {name}
      </p>
    </div>
  );
};

export default NameLogo;
