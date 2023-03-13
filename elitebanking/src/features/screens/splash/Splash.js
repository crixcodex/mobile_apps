import {View, Text, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {splashStyle} from './style';

export default function Splash({navigation}) {
  const fadeInAnim = useRef(new Animated.Value(0)).current;
  const fadeInAnimSubText = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeInAnimSubText, {
      toValue: 1,
      duration: 2000,
      delay: 2700,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        navigation.navigate('Onboard');
      }, 500);
    });
  }, []);

  return (
    <View style={splashStyle.body}>
      <Animated.View
        style={[
          {
            opacity: fadeInAnim,
          },
        ]}>
        <Text style={splashStyle.logoText}>ELITE BANK</Text>
      </Animated.View>

      <Animated.View
        style={[
          {
            opacity: fadeInAnimSubText,
          },
        ]}>
        <Text style={splashStyle.buttomText}>Banking Made Easy</Text>
      </Animated.View>
    </View>
  );
}
