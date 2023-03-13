import {View, Text as Txt} from 'react-native';
import React from 'react';

const Text = ({children, size, color, center, fontWeight, rest, style}) => {
  return (
    <Txt
      style={[
        {
          fontFamily: 'Roboto-Medium',
          color: color ? color : '#fff',
          fontSize: size ? size : 15,
          fontWeight: fontWeight,
          textAlign: center ? 'center' : null,
        },
        style,
      ]}>
      {children}
    </Txt>
  );
};

export default Text;
