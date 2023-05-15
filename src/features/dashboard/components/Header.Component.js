import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Searchbar, Text} from 'react-native-paper';
import {Colors, FontSize} from '../../../resources/constants/fonts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Images from '../../../resources/constants/images';
import Icons from '../../../resources/constants/icons';

function HeaderComponent() {
  return (
    <View>
      <View style={styles.HeaderColorPrimary}>
        <View style={styles.HeaderName}>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.photo} source={Images.motorist} />
            <Text style={styles.textBlackName}>Halo, Pandu</Text>
          </View>
          <FontAwesome5 size={25} name="bell" color={Colors.white} />
        </View>
      </View>
      <View style={styles.HeaderColorWhite}>
        <View style={{flex: 0}}>
          <Searchbar
            placeholder={'Cari Produk'}
            style={styles.searchbar}
            inputStyle={styles.inputStyle}
            placeholderTextColor={Colors.textGrey}
            icon={() => (
              <Image style={styles.iconSearch} source={Icons.search} />
            )}
            // onChangeText={onChangeSearch}
            // value={searchQuery}
          />
        </View>
        <TouchableOpacity style={[styles.button, {marginBottom: 0}]}>
          <View style={styles.viewButton}>
            <Image style={styles.iconChoose} source={Icons.stockist} />
            <Text style={styles.greyText}>
              Pilih Stockist {'\n'}
              Terdekat
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.boldText}>Kelapa Dua</Text>
            <Feather size={20} name="arrow-down-circle" color={Colors.black} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.viewButton}>
            <Image style={styles.iconChoose} source={Icons.category} />
            <Text style={styles.greyText}>Pilih Kategori</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.boldText}>Semua Produk</Text>
            <Feather size={20} name="arrow-down-circle" color={Colors.black} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HeaderComponent;

const styles = StyleSheet.create({
  //primary
  HeaderColorPrimary: {
    backgroundColor: Colors.primary,
    height: 120,
  },
  HeaderName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  photo: {
    height: 30,
    width: 30,
    backgroundColor: Colors.white,
    borderRadius: 50,
  },
  textBlackName: {...FontSize.b1Blk, color: Colors.white, paddingLeft: 10},

  //white
  HeaderColorWhite: {
    backgroundColor: Colors.white,
    margin: 15,
    elevation: 10,
    borderRadius: 10,
    bottom: 60,
  },

  //Search
  searchbar: {
    backgroundColor: Colors.waitBackground,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    height: 50,
  },
  inputStyle: {
    ...FontSize.b2Reg,
  },
  iconSearch: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },

  //button
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: Colors.primary,
    alignItems: 'center',
  },
  viewButton: {flexDirection: 'row', alignItems: 'center'},
  iconChoose: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  greyText: {...FontSize.b2Reg, paddingLeft: 10},
  boldText: {...FontSize.b2Blk, paddingRight: 10},
});
