import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import NavigationString from '../Navigation/NavigationString';
import COLORS from '../Theme/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SplashScreen({navigation}) {
  // setTimeout(() => {
  //     navigation.replace(NavigationString.LoginScreen);
  // }, 3000);
  const nav = () => {
    navigation.navigate(NavigationString.LoginScreen);
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} />
      {/* <Image
                source={require('../assets/jumpingsquats.gif')}
                style={{ width: '100%', height: "50%" }}
            /> */}
      <MaterialCommunityIcons
        name="food-outline"
        size={100}
        color="black"
        style={{color: COLORS.white, bottom: 20}}
      />
      <Text style={[styles.hometext, {letterSpacing: 6}]}>FoodCort</Text>
      <Text
        style={[
          styles.hometext,
          {fontSize: 17, letterSpacing: 2, fontWeight: '600'},
        ]}>
        Food deliver service
      </Text>
      <TouchableOpacity style={styles.button} onPress={e => nav()}>
        <Ionicons name="chevron-down" size={30} color="#F3F4FB" />
      </TouchableOpacity>
      {/* <MaterialCommunityIcons
          name="food-outline"
          size={100}
          
          color="black"
          style={{color:COLORS.black}}
        /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  hometext: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
  button: {
    width: 64,
    height: 64,
    borderRadius: 64 / 2,
    backgroundColor: COLORS.lightseconary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 70,
  },
});
