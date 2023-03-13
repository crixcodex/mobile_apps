import {View, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {inputFieldStyle} from './style';

export default function InputField({
  style,
  mode,
  keyboardType,
  secureTextEntry,
  rest,
  label,
  color,
  error,
  textContentType,
  width,
}) {
  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      outlineColor="#5a0ad2"
      textContentType={secureTextEntry ? 'password' : textContentType}
      outlineStyle={{
        borderWidth: 1.9,
      }}
      autoCorrect={false}
      error={error}
      style={inputFieldStyle(style, width, color)}
      placeholder={label}
      mode={mode ? mode : 'outlined'}
      keyboardType={keyboardType}
      {...rest}
    />
  );
}
