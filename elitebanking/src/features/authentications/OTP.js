import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Linking, Alert} from 'react-native';

import {Button, TextInput} from 'react-native-paper';
import DefaultStyle from '../../style';
import AuthLayout from './AuthLayout';

export default function OTP() {
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const thirdInputRef = useRef(null);
  const fourthInputRef = useRef(null);

  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [inputThree, setInputThree] = useState('');
  const [inputFour, setInputFour] = useState('');

  const maxInputSize = 1;

  return (
    <>
      <AuthLayout
        showLastLoggedIn={true}
        title={'Confirmation'}
        subtitle={'A code was sent via SMS to *********1641'}></AuthLayout>
      <View style={DefaultStyle.body}>
        <View style={DefaultStyle.container}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <TextInput
              maxLength={maxInputSize}
              style={DefaultStyle.input}
              mode="outlined"
              ref={firstInputRef}
              outlineColor="#5a0ad2"
              outlineStyle={{
                borderWidth: 1.9,
              }}
              keyboardType="numeric"
              textAlign="center"
              onChangeText={value => {
                setInputOne(value);
                if (value.length >= maxInputSize) {
                  secondInputRef.current?.focus();
                }
              }}
            />
            <TextInput
              maxLength={maxInputSize}
              style={DefaultStyle.input}
              mode="outlined"
              outlineColor="#5a0ad2"
              outlineStyle={{
                borderWidth: 1.9,
              }}
              ref={secondInputRef}
              keyboardType="numeric"
              textAlign="center"
              onChangeText={value => {
                setInputOne(value);
                if (value.length >= maxInputSize) {
                  thirdInputRef.current?.focus();
                } else {
                  firstInputRef.current?.focus();
                }
              }}
            />
            <TextInput
              maxLength={maxInputSize}
              style={DefaultStyle.input}
              mode="outlined"
              outlineColor="#5a0ad2"
              outlineStyle={{
                borderWidth: 1.9,
              }}
              ref={thirdInputRef}
              keyboardType="numeric"
              textAlign="center"
              onChangeText={value => {
                setInputOne(value);
                if (value.length >= maxInputSize) {
                  fourthInputRef.current?.focus();
                } else {
                  secondInputRef.current?.focus();
                }
              }}
            />
            <TextInput
              maxLength={maxInputSize}
              style={DefaultStyle.input}
              mode="outlined"
              outlineColor="#5a0ad2"
              outlineStyle={{
                borderWidth: 1.9,
              }}
              ref={fourthInputRef}
              keyboardType="numeric"
              textAlign="center"
              onChangeText={value => {
                setInputOne(value);
                if (value.length >= maxInputSize) {
                  fourthInputRef.current?.focus();
                } else {
                  thirdInputRef.current?.focus();
                }
              }}
            />
          </View>

          <Text style={{marginTop: 30, textAlign: 'center'}}>
            Didn't receive any code ? Resend Code
          </Text>

          <View
            style={{
              flex: 1,
              marginBottom: 70,
              justifyContent: 'flex-end',
            }}>
            <Button
              icon="camera"
              onPress={() => {
                Alert.alert('Thanks for Submitting your OTP Code');
              }}
              loading={false}
              mode="elevated"
              style={DefaultStyle.__btn}
              textColor="#ffffff"
              buttonColor="#5a0ad2">
              CONTINUE
            </Button>
          </View>
        </View>
      </View>
    </>
  );
}
