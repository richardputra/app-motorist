import {StyleSheet, View, ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';
import Images from '../../../resources/constants/images';
import {NavigationHelper} from '../../../helper';

function SplashScreen({navigation}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    intervalId = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (count >= 3) {
      NavigationHelper.reset('Authentication.OnboardingScreen');
      setCount(0);
      clearInterval(intervalId);
    }
  }, [count]);

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={Images.splash}
        resizeMode="cover"
        style={{
          flex: 1,
        }}
      />
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({});
