import {StyleSheet} from 'react-native';

const DefaultStyle = StyleSheet.create({
  body: {
    alignItems: 'center',
    margin: 0,
    // top:100,
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingHorizontal: 1,
  },
  text: {
    color: '#5a0ad2',
    fontSize: 20,
    // fontStyle: 'italic',
    margin: 10,
  },

  input: {
    marginTop: 70,
    width: 60,
    marginHorizontal: 3,
    textAlign: 'center',
    color: '#62656b',
    // fontWeight: 'bold',
    fontSize: 24,
  },

  __btn: {
    borderRadius: 5,
    width: 260,
    padding: 7,
  },
  backgroundImage: {
    backgroundColor: '#fc0',
    width: '100%', // applied to Image
    height: '100%',
    resizeMode: 'cover',
  },
});

export default DefaultStyle;
