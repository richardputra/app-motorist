import {ScrollView, StyleSheet, View, SafeAreaView} from 'react-native';
import React from 'react';
import {Text, TextInput} from 'react-native-paper';
import {Colors, FontSize} from '../../../resources/constants/fonts';
import PaperComponent from '../../../components/papers';

function LoginPhoneScreen({navigation}) {
  return (
    <SafeAreaView style={styles.viewScreen}>
      <ScrollView>
        <Text style={styles.boldText}>Masukkan Nomor Hp Kamu</Text>
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
      </ScrollView>

      <View style={styles.buttonLogin}>
        <PaperComponent.Button
          onPress={() => navigation.navigate('Authentication.LoginPinScreen')}>
          Masuk
        </PaperComponent.Button>
        <Text style={styles.greyText}>
          Belum Punya Akun? <Text style={styles.boldPrimaryText}>Daftar</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default LoginPhoneScreen;

const styles = StyleSheet.create({
  viewScreen: {flex: 1, margin: 30},
  boldText: {
    ...FontSize.b1Blk,
    marginLeft: 15,
  },
  greyText: {
    ...FontSize.b2Reg,
    textAlign: 'center',
    paddingTop: 20,
  },
  boldPrimaryText: {
    ...FontSize.b2Blk,
    color: Colors.primary,
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
