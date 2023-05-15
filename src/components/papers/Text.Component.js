import React from 'react';
import {StyleSheet} from 'react-native';
import {Text as PaperText} from 'react-native-paper';
import {FontSize} from '../../resources/constants/fonts';

export default function Text(props) {
  const {children, style} = props;
  return (
    <PaperText {...props} style={[styles.text, style]}>
      {children}
    </PaperText>
  );
}

const styles = StyleSheet.create({
  text: {
    ...FontSize.b2Reg,
    lineHeight: null,
  },
});
