import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {Card, Text} from 'react-native-paper';
import AuthenticationString from './String.Component';
import {Colors, FontSize} from '../../../resources/constants/fonts';

const width = (Dimensions.get('window').width - 4 * 15) / 2;
function ProductComponent() {
  return (
    <View style={{margin: 12}}>
      <Text style={styles.boldText}>Produk</Text>
      <View style={styles.viewCard}>
        {AuthenticationString.products.map((subject, i) => {
          return (
            <Card
              key={subject.id}
              style={[
                styles.card,
                {
                  marginLeft: i % 2 !== 0 ? 15 : 0,
                },
              ]}>
              <TouchableOpacity>
                <Image
                  style={styles.imagePhoto}
                  source={{
                    uri:
                      subject?.inventory?.good?.image +
                      '?x-oss-process=image/resize,m_fill,h_250,w_250',
                  }}
                />
                <Text style={styles.boldTextName}>
                  {subject?.inventory?.good?.name}
                </Text>
                {subject?.discount ? (
                  <>
                    <View style={styles.viewDiscount}>
                      <Text style={styles.amountDicount}>
                        Rp{' '}
                        {Math.ceil(
                          subject?.inventory?.good.goodUnits[0]
                            ?.sellingPrices[0]?.sellingPrice,
                        ).toLocaleString('id-ID')}
                      </Text>
                      {subject.discount?.discountType === 'HARGA' ? (
                        <Text style={styles.amountDiscountHarga}>
                          {Math.ceil(
                            ((subject?.inventory?.good.goodUnits[0]
                              .sellingPrices[0]?.sellingPrice -
                              subject?.total) /
                              subject?.inventory?.good.goodUnits[0]
                                .sellingPrices[0]?.sellingPrice) *
                              100,
                          ).toLocaleString('id-ID')}
                          %
                        </Text>
                      ) : (
                        <Text style={styles.amountDiscountPercentase}>
                          {Math.ceil(subject.discount?.amount).toLocaleString(
                            'id-ID',
                          )}
                          %
                        </Text>
                      )}
                    </View>
                    <Text style={styles.sellingPrice}>
                      Rp {Math.ceil(subject?.total).toLocaleString('id-ID')}
                    </Text>
                  </>
                ) : (
                  <Text
                    style={[
                      styles.sellingPrice,
                      {
                        padding: 10,
                      },
                    ]}>
                    Rp{' '}
                    {Math.ceil(
                      subject?.inventory?.good.goodUnits[0]?.sellingPrices[0]
                        ?.sellingPrice,
                    ).toLocaleString('id-ID')}
                  </Text>
                )}
              </TouchableOpacity>
            </Card>
          );
        })}
      </View>
    </View>
  );
}

export default ProductComponent;

const styles = StyleSheet.create({
  boldText: {
    ...FontSize.b1Blk,
    marginLeft: 15,
  },
  card: {
    marginTop: 15,
    width: width,
    height: 250,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOpacity: 0.2,
    elevation: 5,
  },
  viewCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'flex-start',
  },
  imagePhoto: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 10,
    resizeMode: 'contain',
  },

  boldTextName: {
    textAlign: 'center',
    ...FontSize.b2Blk,
    padding: 10,
    height: 70,
  },

  sellingPrice: {
    textAlign: 'center',
    ...FontSize.b1Blk,
    color: Colors.primary,
  },

  //discount
  viewDiscount: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  amountDicount: {
    color: Colors.discountGrey,
    ...FontSize.b3Reg,
    textDecorationLine: 'line-through',
  },
  amountDiscountHarga: {
    backgroundColor: Colors.primary,
    color: Colors.white,
    ...FontSize.c1Blk,
    marginLeft: 2,
    paddingHorizontal: 5,
    paddingTop: 2,
    borderRadius: 3,
  },
  amountDiscountPercentase: {
    backgroundColor: Colors.primary,
    color: Colors.white,
    ...FontSize.c1Blk,
    marginLeft: 2,
    paddingHorizontal: 5,
    paddingTop: 2,
    borderRadius: 3,
  },
});
