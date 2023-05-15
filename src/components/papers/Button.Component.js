import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import {Colors, FontSize} from '../../resources/constants/fonts';

export default function Button(props) {
  return (
    <PaperButton
      mode={'contained'}
      uppercase={false}
      style={[styles.btnContainer, props.buttonStyle]}
      contentStyle={[styles.buttonStyle, props.contentStyle]}
      labelStyle={[styles.labelStyle, props.buttonLabelStyle]}
      buttonColor={Colors.primary}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    width: '100%',
    alignSelf: 'center',
    elevation: 3,
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonStyle: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelStyle: {
    color: Colors.white,
    fontSize: 16,
    letterSpacing: 0.2,
    ...FontSize.b1Blk,
  },
});
