import {StyleSheet} from 'react-native';

const DefaultStyle = StyleSheet.create({
  body: {
    alignItems: 'center',
    margin: 0,
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    paddingHorizontal: 5,
  },
  text: {
    color: '#5a0ad2',
    fontSize: 20,
    // fontStyle: 'italic',
    margin: 10,
  },

  input: {
    marginBottom: 10,
    width: 50,
    marginHorizontal: 3,
  },

  __btn: {
    borderRadius: 5,
    width: 280,
    padding: 7,
  },
});

export default DefaultStyle;
