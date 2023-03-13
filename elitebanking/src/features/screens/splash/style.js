import {StyleSheet} from 'react-native';

export const splashStyle = StyleSheet.create({
  body: {
    backgroundColor: '#5a0ad2',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoText: {
    fontSize: 50,
    color: '#ffffff',
    fontFamily: 'LilitaOne-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 10,
  },

  buttomText: {
    fontSize: 10,
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'roboto',
  },
});
