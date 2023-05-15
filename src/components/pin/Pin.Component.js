import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
  MaskSymbol,
  isLastFilledCell,
} from 'react-native-confirmation-code-field';
import PaperComponent from '../papers';
import {Colors} from '../../resources/constants/fonts';

export default function Pin({cellCount, value, setValue}) {
  const theme = useTheme();
  const ref = useBlurOnFulfill({value, cellCount: cellCount});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const renderCell = ({index, symbol, isFocused}) => {
    let textChild = null;

    if (symbol) {
      textChild = (
        <MaskSymbol
          maskSymbol="●"
          isLastFilledCell={isLastFilledCell({index, value})}>
          {symbol}
        </MaskSymbol>
      );
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <View
        onLayout={getCellOnLayoutHandler(index)}
        key={index}
        style={[styles.cellRoot, isFocused && styles.focusCell]}>
        <PaperComponent.Text
          style={[styles.cellText, {color: theme.colors.text}]}>
          {textChild}
        </PaperComponent.Text>
      </View>
    );
  };

  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={setValue}
      cellCount={cellCount}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={renderCell}
    />
  );
}

const styles = StyleSheet.create({
  codeFieldRoot: {
    width: 280,
    marginTop: 20,
    selectionColor: '#E60600',
  },
  cellRoot: {
    width: 50,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.lineGrey,
    marginRight: 5,
    borderRadius: 5,
  },
  cellText: {
    fontSize: 20,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#1D1D1D',
    borderBottomWidth: 2,
  },
});
