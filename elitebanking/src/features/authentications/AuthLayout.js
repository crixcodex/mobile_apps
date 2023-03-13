import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';

function AuthLayout(props) {
  return (
    <>
      <View
        style={{
          height: props.height
            ? props.height
            : props.showLastLoggedIn
            ? 250
            : 100,
          // borderBottomLeftRadius: 100,
          borderBottomColor: '#99E86C',
          borderBottomWidth: 10,
          backgroundColor: '#5a0ad2',
        }}>
        <View>
          {props.showLastLoggedIn ? (
            <>
              <Text
                style={{
                  marginBottom: 10,
                  color: '#ffffff',
                  fontSize: 15,
                  marginTop: 40,
                  marginLeft: 50,

                  //   fontWeight: 'bold',
                  textAlign: 'left',
                  fontFamily: 'Roboto-Medium',
                }}>
                Izuchukwu Chima
              </Text>
              <Text
                style={{
                  marginBottom: 25,
                  color: '#ffffff',
                  fontSize: 10,
                  // marginTop: 40,
                  //   fontWeight: 'bold',
                  marginLeft: 50,
                  textAlign: 'left',
                  fontFamily: 'Roboto-Medium',
                }}>
                Last Logged : Yesterday, 1:9:27
              </Text>
            </>
          ) : (
            <View style={{height: 100}}></View>
          )}
          <Text
            style={{
              marginBottom: 10,
              color: '#ffffff',
              fontSize: 25,
              marginTop: 10,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {props.title}
            {/* Welcome Back ! */}
          </Text>
        </View>

        <View>
          <Text
            style={{
              marginBottom: 30,
              color: '#ffffff',
              fontSize: 10,
              //   fontWeight: 'bold',
              fontFamily: 'Oswald-regular',
              textAlign: 'center',
            }}>
            {props.subtitle}
            {/* Sign in your account using your email and password */}
          </Text>
        </View>
      </View>
      {props.children}
    </>
  );
}

export default AuthLayout;
