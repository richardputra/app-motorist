import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {Headline as PaperHeadline} from 'react-native-paper';
import {FontSize} from '../../resources/constants/fonts';

export default function Headline(props) {
  const {children, style} = props;
  return (
    <PaperHeadline
      {...props}
      style={[styles.text, {color: useTheme().colors.text}, style]}>
      {children}
    </PaperHeadline>
  );
}

const styles = StyleSheet.create({
  text: {
    lineHeight: null,
    ...FontSize.b2Reg,
    letterSpacing: 0.4,
    color: 'yellow',
  },
});
