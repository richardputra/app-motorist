import {Dimensions, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function BannerComponent() {
  const width = Dimensions.get('window').width;
  const colors = [
    'https://image-storage-grosirone.oss-ap-southeast-5.aliyuncs.com/merchant/dev/sales-banner/d2f30aa68a0edd89bac228a72f933a47.jpg',
    'https://image-storage-grosirone.oss-ap-southeast-5.aliyuncs.com/merchant/dev/sales-banner/1635b097bf53ff99d07f76a13de92ab4.jpg',
  ];
  return (
    <GestureHandlerRootView style={{marginTop: '-15%'}}>
      <Carousel
        loop
        width={width}
        height={width / 4.5}
        autoPlay={true}
        data={colors}
        scrollAnimationDuration={2000}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        renderItem={({index}) => (
          <View>
            <Image
              style={{width: '100%', height: '100%', borderRadius: 10}}
              source={{
                uri: colors[index] + '?x-oss-process=image/resize,p_100',
              }}
            />
          </View>
        )}
      />
    </GestureHandlerRootView>
  );
}

export default BannerComponent;

const styles = StyleSheet.create({});
