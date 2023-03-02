import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  Alert,
  ToastAndroid,
  StatusBar,Switch
} from 'react-native';
import COLORS from '../Theme/Color';
import Button from '../component/Button';
import Input from '../component/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../component/Loader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SocialAuth from '../component/SocialAuth';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { firebase } from "../../Firebase/firebaseConfig";
const LoginScreen = ({navigation}) => {
  const [inputs, setInputs] = React.useState({email: '', password: ''});
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  // const [data, setdata] = React.useState('')
  // console.log(data)
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  console.log(inputs);
  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      login();
      // handlelogin();
    }
  };

  const login = () => {
    var email = 'admin';
    var password = '12345';
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      // let userData = await AsyncStorage.getItem('userData');
      // console.log("UserDate1",userData)

      if (email || password) {
        // userData = JSON.parse(userData);
        // // setdata(userData)
        // console.log("UserDate2",userData)
        if (inputs.email == email && inputs.password == password) {
          navigation.navigate('HomeScreen');
          // AsyncStorage.setItem(
          //   'userData',
          //   JSON.stringify({...userData, loggedIn: true}),
          // );
        } else {
          Alert.alert('Error', 'Invalid Details');
        }
      } else {
        Alert.alert('Error', 'User does not exist');
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.primary, flex: 1}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <Loader visible={loading} />
      <View style={{backgroundColor: COLORS.primary, flex: 1}}>
        <View style={{backgroundColor: COLORS.primary}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingVertical:10
            }}>
            <Ionicons name="chevron-back" size={30} color="#fff" onPress={(e)=>navigation.goBack()} />
            <Text style={{color: '#fff'}}>Forgate your password ?</Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: COLORS.white,
            position: 'absolute',
            top: 60,
            bottom: 0,
            left: 0,
            right: 0,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            paddingTop: 50,
            paddingHorizontal: 20,
          }}>
          <KeyboardAwareScrollView
            enableOnAndroid={true}
            enableAutomaticScroll={Platform.OS === 'ios'}
            showsVerticalScrollIndicator={false}>
            <Text
              style={{color: COLORS.black, fontSize: 28, fontWeight: 'bold'}}>
              Let's get something
            </Text>
            <Text
              style={{color: COLORS.grey, fontSize: 18, marginVertical: 10}}>
              Good to see you back
            </Text>

            <SocialAuth />

            <View style={{marginVertical: 20}}>
              <Input
                onChangeText={text => handleOnchange(text, 'email')}
                onFocus={() => handleError(null, 'email')}
                iconName="account-outline"
                label="Email"
                placeholder="Username"
                error={errors.email}
              />
              {/* {inputs.email == data.email ? (<Text>hii</Text>):null } */}
              <Input
                onChangeText={text => handleOnchange(text, 'password')}
                onFocus={() => handleError(null, 'password')}
                iconName="lock-outline"
                label="Password"
                placeholder="Enter your password"
                error={errors.password}
                password
              />
                <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: COLORS.black,
                    fontWeight:'500',
                    // textAlign: "center",
                    fontSize: 14,
                  }}>
                  Reminder me next time
                </Text>
                <Switch
        trackColor={{false: '#767577', true: '#FEB74D'}}
        thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
              </View>
              <Button title="SIGN IN" onPress={validate} isPrimary />
              <Text
                onPress={() => navigation.navigate('RegistrationScreen')}
                style={{
                  color: COLORS.grey,
                  fontWeight: '700',
                  textAlign: 'center',
                  fontSize: 16,
                }}>
                Don't have account ?
                <Text style={{color: COLORS.lightseconary}}> Sign up</Text>
              </Text>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
