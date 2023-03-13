import React, {useEffect, useState} from 'react';
import {View, Linking} from 'react-native';
import DefaultStyle from '../../style';
import AuthLayout from './AuthLayout';
import Button from '../../components/Button/Button';
import InputField from '../../components/Input/InputField';
import {Text} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function SignIn({navigation}) {
  return (
    <>
      <AuthLayout
        showLastLoggedIn={true}
        title={'Welcome Back !'}
        subtitle={'Sign in your account using your email and password'}>
        <View style={DefaultStyle.body}>
          <View style={DefaultStyle.container}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <InputField
                style={{flex: 1, marginTop: 70}}
                keyboardType={'email-address'}
                label="Email Address"
              />
            </View>

            <View style={{display: 'flex', flexDirection: 'row'}}>
              <InputField
                style={{flex: 1, marginTop: 10}}
                // keyboardType="visible-password"
                label="Password"
                secureTextEntry={true}
              />
            </View>

            <View
              style={{
                flex: 1,
                marginTop: 25,
              }}>
              <Button
                style={{marginBottom: 7}}
                label={'SIGN IN'}
                width={260}
                onPress={() => navigation.navigate('OTP')}
              />

              <Button
                mode={'elevated'}
                color={'#99E86C'}
                textColor="#ffffff"
                style={{
                  borderColor: '#99E86C',
                  borderWidth: 2,
                  fontFamily: 'Roboto-Medium',
                  fontWeight: 'bold',
                }}
                label={'CREATE ACCOUNT'}
                width={260}
                onPress={() => navigation.navigate('OTP')}
              />
              <View
                style={{
                  marginVertical: 50,
                }}>
                <Text
                  onPress={() => navigation.push('ForgotPassword')}
                  style={{
                    fontFamily: 'Roboto-Medium',
                    fontWeight: 'bold',
                    color: '#62656b',
                    textAlign: 'center',
                  }}>
                  Forgot Password
                </Text>
              </View>
            </View>
          </View>
        </View>
      </AuthLayout>
    </>
  );
}
