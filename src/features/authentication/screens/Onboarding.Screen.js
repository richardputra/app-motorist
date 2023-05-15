import React, {useRef} from 'react';
import {View, Image, StyleSheet, SafeAreaView} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, FontSize} from '../../../resources/constants/fonts';
import PaperComponent from '../../../components/papers';
import Images from '../../../resources/constants/images';

const introSlides = [
  {
    title: 'Cepat & Mudah',
    text: 'Nikmati pengalaman berbelanja cepat dan mudah karena kami hadir di dekat anda.',
    image: Images.onBoarding,
  },
  {
    title: 'Fleksibel',
    text: 'Menyediakan berbagai pilihan pembayaran termasuk fitur PayLater.',
    image: Images.onBoarding2,
  },
];
function OnboardingScreen({navigation}) {
  const sliderRef = useRef(null);

  const changeActiveIndex = index => {
    sliderRef.current.goToSlide(index);
  };

  const renderSlide = ({index, item}) => (
    <View key={index} style={styles.appIntroSliderMainView}>
      <Image source={item.image} style={styles.introImage} />
      <Text style={styles.boldText}>{item?.title}</Text>
      <Text style={styles.greyText}>{item?.text}</Text>
    </View>
  );

  const renderPagination = (introSlides, activeIndex) => (
    <>
      <View style={styles.dotsContainer}>
        {introSlides.map((_, i) => (
          <View
            key={i}
            style={[styles.defaultDot, i === activeIndex && styles.activeDot]}
          />
        ))}
      </View>

      <View style={{height: '20%'}}>
        {activeIndex === 0 && (
          <View
            style={{
              ...styles.bottomButtonsContainer,
            }}>
            <PaperComponent.Button onPress={() => changeActiveIndex(1)}>
              Lanjut
            </PaperComponent.Button>
          </View>
        )}
        {activeIndex === 1 && (
          <View style={styles.bottomButtonsContainer}>
            <PaperComponent.Button
              onPress={() =>
                navigation.navigate('Authentication.LoginPhoneScreen')
              }>
              Masuk
            </PaperComponent.Button>
            <PaperComponent.Button
              buttonColor={Colors.transparent}
              style={styles.buttonStyle}
              labelStyle={styles.labelStyle}
              onPress={() => permissionRequirement('register')}>
              Register
            </PaperComponent.Button>
          </View>
        )}
      </View>
    </>
  );

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="md-arrow-round-forward" color={Colors.white} size={24} />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="md-checkmark" color={Colors.white} size={24} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <AppIntroSlider
        data={introSlides}
        ref={sliderRef}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderSlide}
        renderPagination={activeIndex =>
          renderPagination(introSlides, activeIndex)
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
  },
  appIntroSliderMainView: {
    flex: 1,
    paddingBottom: 50,
  },
  dotsContainer: {
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultDot: {
    width: 10,
    height: 10,
    borderRadius: 6,
    marginHorizontal: 5,
    marginBottom: 50,
    backgroundColor: Colors.cancelledBackground,
  },
  activeDot: {
    backgroundColor: Colors.primary,
  },
  boldText: {
    ...FontSize.h1Blk,
    paddingLeft: 30,
  },
  greyText: {
    ...FontSize.b1Reg,
    paddingHorizontal: 30,
    marginBottom: 15,
  },

  introImage: {
    width: '75%',
    height: '75%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 10,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: Colors.black,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomButtonsContainer: {
    paddingBottom: 20,
    width: '100%',
    paddingHorizontal: 30,
  },
  buttonStyle: {
    borderWidth: 2,
    borderColor: Colors.lineGrey,
    borderRadius: 10,
    marginTop: 15,
  },
  labelStyle: {color: Colors.black, ...FontSize.b1Blk},
});
export default OnboardingScreen;
