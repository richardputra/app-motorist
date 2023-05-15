import {useNavigation} from '@react-navigation/core';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar as PaperAppbar} from 'react-native-paper';
import Constants from '../../resources/constants/Constans';
import {Colors, FontSize} from '../../resources/constants/fonts';

function Appbar({
  type = 'activity',
  appbarStyle,
  title,
  titleContainerStyle,
  titleStyle,
  onClick,
  hideLeftComponent,
  rightComponent,
  component,
}) {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <PaperAppbar.Header
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
          borderBottomColor: theme.colors.border,
        },
        appbarStyle,
      ]}
      theme={{colors: {primary: '#FFFFFF'}}}>
      {!hideLeftComponent &&
        (type === 'activity' ? (
          <PaperAppbar.BackAction
            color={Colors.primary}
            onPress={() => (onClick ? onClick() : navigation.goBack())}
          />
        ) : (
          <PaperAppbar.Action
            icon={'close'}
            color={Colors.primary}
            onPress={() => (onClick ? onClick() : navigation.goBack())}
          />
        ))}
      <View
        style={[
          StyleSheet.absoluteFill,
          styles.contentContainer,
          titleContainerStyle,
        ]}
        pointerEvents={'box-none'}>
        <PaperAppbar.Content
          title={
            typeof title === 'string' && title !== ''
              ? Constants.screenWidth < 400
                ? title.length >= 25
                  ? title.substring(0, 25).concat('...')
                  : title
                : title.length >= 30
                ? title.substring(0, 30).concat('...')
                : title
              : title
          }
          titleStyle={[styles.headerTitle, titleStyle]}
          style={styles.contentStyle}
          color={Colors.primary}
        />
      </View>
      <View style={{flex: 1}} />
      {component && component}
      {rightComponent && rightComponent.map(elements => elements)}
    </PaperAppbar.Header>
  );
}

export default Appbar;

const styles = StyleSheet.create({
  container: {
    elevation: 0,
  },
  headerTitle: {
    letterSpacing: 0.4,
    ...FontSize.b1Reg,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
