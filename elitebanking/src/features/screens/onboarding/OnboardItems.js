import {StyleSheet, View, Image, useWindowDimensions} from 'react-native';
import React from 'react';
import Text from '../../../components/Text/Text';
const OnboardItems = ({item}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
      <View style={{flex: 0.3}}>
        <Text
          style={styles.title}
          fontWeight={'bold'}
          center
          size={27}
          color={'#5a0ad2'}>
          {item.title}
        </Text>
        <Text
          style={[styles.description]}
          size={14}
          center
          color={'#62656b'}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default OnboardItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    flex: 0.7,
    height: 500,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    color: '#5a0ad2',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontVariant: '300',
    color: '#62656b',
    textAlign: 'center',
    paddingHorizontal: 64,
  },
});
