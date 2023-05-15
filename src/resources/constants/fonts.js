import Config from 'react-native-config';

export const Fonts = {
  regular: 'Poppins-Regular',
  black: 'Poppins-Bold',
};

export const Colors = {
  //Base Colors
  primary: Config.ENV === 'DEVELOPMENT' ? '#880d1e' : '#C43E25',
  secondary: Config.ENV === 'DEVELOPMENT' ? '#f26a8d' : '#FDC132',
  background: '#FFFFFF',
  maroon: Config.ENV === 'DEVELOPMENT' ? '#dd2d4a' : '#9F2008',
  mediumRed: '#FF7A60',
  transparent: 'transparent',

  //Colors
  backgroundGrey: Config.ENV === 'DEVELOPMENT' ? '#FFE6F7' : '#F0F0F0',
  backgroundGreyPoint: 'rgba(240, 240, 240, 0.5)',
  textGrey: '#9F9F9F',
  lineGrey: '#E2E2E2',
  discountGrey: '#C4C4C4',
  homeGrey: '#777777',
  backgroundStock: 'rgba(0, 0, 0, 0.25)',

  //Colors Default
  black: '#000000',
  white: '#FFFFFF',
  grey: '#686868',

  //Colors Pinjam Modal
  tosca: '#00D3C3',
  blue: '#00A4D1',

  //Status Waiting
  waitBackground: '#F0F0F0',
  waitText: '#969696',

  //Status Delivery
  deliveryBackground: '#FFEEB7',
  deliveryText: '#FF9200',

  //Status Done
  doneBackground: '#D4FFB7',
  doneText: '#009B00',

  //Status Cancelled
  cancelledBackground: '#FFD5D5',
  cancelledText: '#D42E12',

  //Status Blue
  blueBackground: '#CCE3F2',
  blueText: '#1F4DF5',

  //Checkbox
  checkbox: '#55C245',

  //Rank1
  backgroundRank1: '#F6C343',
  borderRank1: '#DE9F00',

  //Rank2
  backgroundRank2: '#E2E2E2',
  borderRank2: '#9B9B9B',

  //Rank3
  backgroundRank3: '#D06E22',
  borderRank3: '#7E2700',
};

export const Sizes = {
  // font sizes
  h1: 30, //80
  h2: 22, //60
  b1: 16, //40
  b2: 12, //35
  b3: 11, //30
  c1: 9,
};

export const globalSize = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,
};

export const FontSize = {
  h1Reg: {
    fontSize: Sizes.h1,
    fontFamily: Fonts.regular,
  },
  h1Blk: {
    fontSize: Sizes.h1,
    fontFamily: Fonts.black,
  },
  h2Reg: {
    fontSize: Sizes.h2,
    fontFamily: Fonts.regular,
  },
  h2Blk: {
    fontSize: Sizes.h2,
    fontFamily: Fonts.black,
  },
  b1Reg: {
    fontSize: Sizes.b1,
    fontFamily: Fonts.regular,
  },
  b1Blk: {
    fontSize: Sizes.b1,
    fontFamily: Fonts.black,
  },
  b2Reg: {
    fontSize: Sizes.b2,
    fontFamily: Fonts.regular,
  },
  b2Blk: {
    fontSize: Sizes.b2,
    fontFamily: Fonts.black,
  },
  b3Reg: {
    fontSize: Sizes.b3,
    fontFamily: Fonts.regular,
  },
  b3Blk: {
    fontSize: Sizes.b3,
    fontFamily: Fonts.black,
  },
  c1Reg: {
    fontSize: Sizes.c1,
    fontFamily: Fonts.regular,
  },
  c1Blk: {
    fontSize: Sizes.c1,
    fontFamily: Fonts.black,
  },
};

const fonts = {Fonts, Sizes, Colors, FontSize, globalSize};

export default fonts;
