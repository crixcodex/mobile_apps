import React, {useEffect, useState} from 'react';
import {View, Linking} from 'react-native';
import DefaultStyle from '../../style';
import AuthLayout from './AuthLayout';
import Button from '../../components/Button/Button';
import InputField from '../../components/Input/InputField';
import {Text} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function ForgotPassword({navigation}) {
  return (
    <>
      <AuthLayout
        showLastLoggedIn={false}
        title={'Recover Password'}
        height={250}
        subtitle={'receive an OTP code to recover your account '}>
        <View style={DefaultStyle.body}>
          <View style={DefaultStyle.container}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <InputField
                style={{flex: 1, marginTop: 70}}
                keyboardType={'email-address'}
                label="Email Address"
              />
            </View>

            <View
              style={{
                flex: 1,
                marginTop: 25,
              }}>
              <Button
                style={{marginBottom: 7}}
                label={'RECOVER ACCOUNT'}
                width={260}
                onPress={() => navigation.navigate('OTP')}
              />

              <View
                style={{
                  marginVertical: 50,
                }}>
                <Text
                  onPress={() => navigation.goBack()}
                  style={{
                    fontFamily: 'Roboto-Medium',
                    fontWeight: 'bold',
                    color: '#62656b',
                    textAlign: 'center',
                  }}>
                  Back To Login
                </Text>
              </View>
            </View>
          </View>
        </View>
      </AuthLayout>
    </>
  );
}
