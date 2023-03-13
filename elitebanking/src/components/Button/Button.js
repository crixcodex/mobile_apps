import {View} from 'react-native';
import React from 'react';
import {Button as Btn} from 'react-native-paper';
import {buttonStyle} from './style';

export default function Button({
  isLoading,
  label,
  icon,
  onPress,
  width,
  color,
  mode,
  rest,
  style,
  textColor,
}) {
  return (
    <View>
      <Btn
        {...rest}
        icon={icon} //camera
        onPress={onPress}
        loading={isLoading}
        mode={mode ? mode : 'elevated'}
        style={[buttonStyle(width), style]}
        textColor={textColor || '#ffffff'}
        buttonColor={color ? color : '#5a0ad2'}>
        {label}
      </Btn>
    </View>
  );
}
