import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  BannerComponent,
  HeaderComponent,
  ProductComponent,
} from '../components';

function DashboardScreen() {
  return (
    <SafeAreaView style={styles.viewScreen}>
      <ScrollView>
        <HeaderComponent />
        <BannerComponent />
        <ProductComponent />
      </ScrollView>
    </SafeAreaView>
  );
}

export default DashboardScreen;

const styles = StyleSheet.create({
  viewScreen: {flex: 1},
});
