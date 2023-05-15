import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, TextInput} from 'react-native-paper';
import PaperComponent from '../../../components/papers';
import {Colors, FontSize} from '../../../resources/constants/fonts';

function ResetPinScreen({navigation}) {
  return (
    <SafeAreaView style={styles.viewScreen}>
      <ScrollView>
        <Text style={styles.boldText}>Masukkan Nomor Hp Anda</Text>
        <TextInput
          placeholder="Contoh: 081234567890"
          placeholderTextColor={Colors.textGrey}
          underlineColor={Colors.lineGrey}
          // value={phoneNumber}
          onChangeText={text => console.log(text)}
          // error={phoneNumberError}
          style={styles.tInputPhoneNumber}
          keyboardType="phone-pad"
          activeUnderlineColor={Colors.lineGrey}
        />
        <Text style={styles.greyText}>
          Masukkan Nomor Hp Anda sesuai dengan nomor yang Anda daftarkan di Akun
          Grosirone
        </Text>
      </ScrollView>

      <View style={styles.buttonLogin}>
        <PaperComponent.Button onPress={() => navigation.goBack()}>
          Kirim
        </PaperComponent.Button>
      </View>
    </SafeAreaView>
  );
}

export default ResetPinScreen;

const styles = StyleSheet.create({
  viewScreen: {flex: 1, margin: 30},
  boldText: {
    ...FontSize.b1Blk,
    marginLeft: 15,
  },
  greyText: {
    ...FontSize.b2Reg,
    paddingTop: 20,
  },

  tInputPhoneNumber: {
    height: 60,
    ...FontSize.b2Reg,
    backgroundColor: Colors.white,
    borderColor: Colors.white,
  },

  buttonLogin: {
    marginTop: 20,
  },
});
