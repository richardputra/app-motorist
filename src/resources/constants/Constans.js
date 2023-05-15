import {Dimensions, Platform, StatusBar} from 'react-native';
import {DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';
import {
  configureFonts,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {FontConfig} from '../../configs/FontConfig';

let headerHeight = Platform.OS === 'ios' ? 66 : 46;
let footerHeight = 55;

const {width: viewportWidth} = Dimensions.get('window');

const wp = percentage => {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
};
const sliderWidth = wp(85);
const itemHorizontalMargin = wp(2);
const itemWidth = sliderWidth + itemHorizontalMargin * 2;

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  roundness: 5,
  fonts: configureFonts(FontConfig),
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#d42e12',
    accent: '#CFCFCF',
    text: '#000000',
    background: '#FFFFFF',
    viewBackground: '#FFFFFF',
    surface: '#FFFFFF',
    altSurface: '#F7F7F7',
    description: '#A2A9B4',
    success: '#4DAA63',
    error: '#DB6D6D',
    shimmerBackground: '#EEEEEE',
    shimmerContent: '#CFCFCF',
    border: '#F2F2F2',
  },
};

const Constants = {
  headerHeight: headerHeight,
  footerHeight: footerHeight,
  viewHeight: Dimensions.get('window').height - headerHeight,
  screenHeight: Dimensions.get('window').height,
  screenWidth: Dimensions.get('window').width,
  statusBarHeight: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
  carouselSliderWidth: Dimensions.get('window').width,
  carouselItemWidth: itemWidth,
  PMDefaultTheme: CombinedDefaultTheme,
};

export default Constants;
