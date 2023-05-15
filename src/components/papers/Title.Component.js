import React from 'react';
import {StyleSheet} from 'react-native';
import {Title as PaperTitle} from 'react-native-paper';
import {FontSize} from '../../resources/constants/fonts';

export default function Title(props) {
  const {children, style} = props;
  return (
    <PaperTitle {...props} style={[styles.text, style]}>
      {children}
    </PaperTitle>
  );
}

const styles = StyleSheet.create({
  text: {
    lineHeight: null,
    ...FontSize.b1Blk,
    letterSpacing: 0.4,
  },
});
