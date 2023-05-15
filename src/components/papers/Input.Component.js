import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, useTheme} from 'react-native-paper';
import PaperComponent from '.';
import {FontSize} from '../../resources/constants/fonts';

export default function Input(props) {
  const {item, inputStyle, inputView} = props;
  const {
    placeHolder,
    label,
    errorMessage,
    secureTextEntry,
    value,
    error,
    keyboardType,
  } = item ?? {};
  const theme = useTheme();
  return (
    <View style={[styles.view, inputView]}>
      <TextInput
        ref={ref =>
          ref &&
          ref.setNativeProps({
            style: {
              fontFamily: Fonts.regular,
              fontWeight: Fonts.regular,
            },
          })
        }
        label={label}
        placeholder={placeHolder}
        error={error}
        secureTextEntry={secureTextEntry}
        value={value ?? ' '}
        placeholderTextColor={'#CFCFCF'}
        underlineColorAndroid={'transparent'}
        activeUnderlineColor={theme.colors.text}
        returnKeyType={'done'}
        autoCapitalize={'none'}
        autoCorrect={false}
        textContentType={'oneTimeCode'}
        style={[styles.input, inputStyle ?? null]}
        keyboardType={keyboardType}
        {...props}
      />
      {error && (
        <PaperComponent.HelperText type={'error'}>
          {errorMessage}
        </PaperComponent.HelperText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    paddingHorizontal: 5,
    letterSpacing: 0.4,
  },
  view: {
    paddingHorizontal: 10,
  },
  input: {
    ...FontSize.b2Reg,
    letterSpacing: 0.4,
    paddingHorizontal: 5,
    backgroundColor: 'transparent',
    width: '100%',
  },
});
