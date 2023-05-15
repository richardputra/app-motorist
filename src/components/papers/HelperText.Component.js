import React from 'react';
import {StyleSheet} from 'react-native';
import {HelperText as PaperHelperText, useTheme} from 'react-native-paper';

export default function HelperText({children, type}) {
  const theme = useTheme();
  return (
    <PaperHelperText
      type={type}
      visible={true}
      style={[
        type === 'error' && {
          color: theme.colors.error,
        },
        styles.error,
      ]}>
      {children}
    </PaperHelperText>
  );
}

const styles = StyleSheet.create({
  error: {
    paddingHorizontal: 5,
    letterSpacing: 0.4,
  },
});
