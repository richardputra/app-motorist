import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Animated,
  Easing,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Text from '../../../components/papers/Text.Component';
import {Colors, FontSize} from '../../../resources/constants/fonts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {NavigationHelper} from '../../../helper';

let numbers = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9},
  {id: ''},
  {id: '0'},
];
// to generate serial number based on count as argument
const getSerialNumbers = count => {
  const numbersArray = [];
  numbers.map((item, index) => {
    numbersArray.push({
      number: item.id,
      empty: false,
    });
  });

  // to make even - which are not full rows will be added empty object with empty key set to true
  const fullRows = Math.floor(numbersArray.length / 2);
  let lastRow = numbersArray.length - fullRows * 2;
  while (lastRow !== 2 && lastRow !== 0) {
    numbersArray.push({_id: `blank-${lastRow}`, empty: true});
    lastRow++;
  }
  return numbersArray;
};

this.animation = new Animated.Value(0);

function LoginPinScreen() {
  const [passwords, setPassword] = useState(['', '', '', '', '', '']);
  const shake = useRef(new Animated.Value(0.5)).current;
  const [subtle, setSubtle] = useState(true);
  const [auto, setAuto] = useState(false);

  //merubah Array menjadi string
  let pass = passwords.join();
  let split_pass = pass.split(',');
  let pass_arr = split_pass.join('');
  useEffect(() => {
    if (!passwords.includes('')) {
      handleSubmitPassCode();
    }
  }, [passwords]);

  //Animation Shake
  const translateXAnim = shake.interpolate({
    inputRange: [0, 1],
    outputRange: [subtle ? -6 : -12, subtle ? 6 : 12],
  });
  const getAnimationStyles = () => ({
    transform: [
      {
        translateX: translateXAnim,
      },
    ],
  });
  const handleSubmitPassCode = () => {
    // CallApi here
    // add passcode check here
    if (pass_arr !== '123456') {
      runAnimation();
      setSubtle(false);
      setAuto(true);
      handleClearPassCode();
    } else {
      NavigationHelper.reset('Dashboard.DashboardScreen');
    }
  };

  const handleClearPassCode = () => {
    setPassword(['', '', '', '', '', '']);
    setAuto(false);
  };
  const runAnimation = () => {
    Animated.sequence([
      Animated.timing(shake, {
        delay: 300,
        toValue: 1,
        duration: subtle ? 300 : 200,
        easing: Easing.out(Easing.sin),
        useNativeDriver: true,
      }),
      Animated.timing(shake, {
        toValue: 0,
        duration: subtle ? 200 : 100,
        easing: Easing.out(Easing.sin),
        useNativeDriver: true,
      }),
      Animated.timing(shake, {
        toValue: 1,
        duration: subtle ? 200 : 100,
        easing: Easing.out(Easing.sin),
        useNativeDriver: true,
      }),
      Animated.timing(shake, {
        toValue: 0,
        duration: subtle ? 200 : 100,
        easing: Easing.out(Easing.sin),
        useNativeDriver: true,
      }),
      Animated.timing(shake, {
        toValue: 0.5,
        duration: subtle ? 300 : 200,
        easing: Easing.out(Easing.sin),
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (auto) runAnimation();
    });
  };

  // Number Pad
  const onPressNumber = num => {
    let tempPassCode = [...passwords];
    for (var i = 0; i < tempPassCode.length; i++) {
      if (tempPassCode[i] == '') {
        tempPassCode[i] = num;
        break;
      } else {
        continue;
      }
    }
    setPassword(tempPassCode);
  };

  const onPressBack = num => {
    let tempPassCode = [...passwords];
    for (let i = tempPassCode.length - 1; i >= 0; i--) {
      if (tempPassCode[i] != '') {
        tempPassCode[i] = '';
        break;
      } else {
        continue;
      }
    }
    setPassword(tempPassCode);
  };

  // Number Pad FlatList render each Item
  const renderNumPadBtnItem = ({item}) => {
    if (item.empty) {
      return (
        <TouchableOpacity
          onPress={() => onPressBack()}
          style={styles.buttonNumber}>
          <FontAwesome5 size={20} name="backspace" color={Colors.black} />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        onPress={() => {
          onPressNumber(item.number);
        }}
        style={styles.buttonNumber}>
        <View>
          <Text style={{...FontSize.h2Blk}}>{item.number}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // NumberPad FlatList
  const renderNumberKeyPad = () => {
    const numkeyPadData = getSerialNumbers(12);
    return (
      <FlatList
        numColumns={3}
        ItemSeparatorComponent={() => <View style={{padding: 3}} />}
        data={numkeyPadData}
        renderItem={renderNumPadBtnItem}
        keyExtractor={item => item.number}
      />
    );
  };

  return (
    <SafeAreaView style={styles.viewScreen}>
      <Text style={styles.boldText}>Masukkan PIN Kamu</Text>
      <View style={styles.containerWrap}>
        <View style={styles.passCodeContainer}>
          {passwords.map(pItem => {
            return (
              <Animated.View
                key={pItem + Math.random()}
                style={[
                  styles.passCodeBox,
                  {
                    backgroundColor: pItem != '' ? Colors.primary : 'white',
                    borderWidth: 1,
                  },
                  getAnimationStyles(),
                ]}></Animated.View>
            );
          })}
        </View>

        <View style={{marginTop: 20}}>
          <Text style={[styles.boldPrimaryText, {textAlign: 'center'}]}>
            PIN yang Anda masukkan salah
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{marginBottom: 20}}
        onPress={() =>
          NavigationHelper.navigate('Authentication.ResetPinScreen')
        }>
        <Text style={styles.greyText}>
          Lupa Pin? <Text style={styles.boldPrimaryText}>Klik disini</Text>
        </Text>
      </TouchableOpacity>
      <View>{renderNumberKeyPad()}</View>
    </SafeAreaView>
  );
}

export default LoginPinScreen;

const styles = StyleSheet.create({
  viewScreen: {flex: 1, margin: 30},
  containerWrap: {
    flex: 1,
  },
  boldText: {
    ...FontSize.b1Blk,
    textAlign: 'center',
  },
  passCodeContainer: {
    paddingHorizontal: 65,
    paddingTop: 20,
    flexDirection: 'row',
  },
  passCodeBox: {
    alignItems: 'center',
    marginHorizontal: 10,
    flex: 1,
    borderRadius: 50,
    height: 15,
  },
  buttonNumber: {
    flex: 1,
    alignItems: 'center',
    height: 90,
    justifyContent: 'center',
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
});
