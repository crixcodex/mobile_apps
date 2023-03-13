import {View, FlatList, StyleSheet, useWindowDimensions} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {onboardingStyle} from './style';
import slides from './slides';
import OnboardItems from './OnboardItems';
import {Animated} from 'react-native';
import {Button} from 'react-native-paper';
import PageIndicator from './PageIndicator';
import Text from '../../../components/Text/Text';

export default function Onboard({navigation}) {

  navigation.addListener('beforeRemove', e => e.preventDefault());

  const {width} = useWindowDimensions();

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(0);
  const [moved, setMoved] = useState(false);

  const viewabledItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      console.log(currentIndex + 1);
      slidesRef.current.scrollToIndex({
        index: currentIndex === slides.length - 1 ? 3 : currentIndex + 1,
      });
    }
    if (currentIndex === slides.length - 1) {
      slidesRef.current.scrollToIndex({index: 0});
    }
  };

  // setInterval(() => {
  //   if (!moved) {
  //     scrollTo();
  //   } else {
  //     setMoved(false);
  //   }
  // }, 10000);

  return (
    <View style={onboardingStyle.container}>
      <View style={{flex: 4, height: '70%'}}>
        <FlatList
          data={slides}
          ref={slidesRef}
          renderItem={({item}) => <OnboardItems item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={({id}) => id}
          onTouchMove={() => setMoved(true)}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {contentOffset: {x: scrollX}},
              },
            ],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewabledItemsChanged}
          viewabilityConfig={viewConfig}
        />
      </View>
      <PageIndicator data={slides} scrollX={scrollX} />

      <View
        style={[
          {
            height: '20%',
            width: '100%',
            backgroundColor: '#5a0ad2',
            borderTopColor: '#99E86C',
            borderTopWidth: 5,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          },
          styles.dropShadow,
        ]}>
        <Button
          onPress={() => navigation.navigate('Login')}
          mode="outlined"
          style={{
            borderRadius: 7,
            marginHorizontal: 10,
            width: 150,
            borderWidth: 2,
            padding: 5,
            borderColor: '#99E86C',
            backgroundColor: '#99E86C',
          }}>
          <Text fontWeight={'bold'} style={{color: '#fff'}}>
            Sign In
          </Text>
        </Button>
        <Button
          mode="outlined"
          style={{
            borderRadius: 7,
            marginHorizontal: 10,
            width: 150,
            borderWidth: 2,
            borderColor: '#fff',
            padding: 5,
          }}>
          <Text fontWeight={'bold'} style={{color: '#fff'}}>
            Get Started
          </Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropShadow: {
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
  },
});
