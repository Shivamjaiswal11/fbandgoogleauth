import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
  ToastAndroid,
  StatusBar,
  KeyboardAvoidingView,Switch
} from 'react-native';

import COLORS from '../Theme/Color';
import Button from '../component/Button';
import Input from '../component/Input';
import Loader from '../component/Loader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import NavigationString from '../Navigation/NavigationString';
import SocialAuth from '../component/SocialAuth';
// import { firebase } from "../../Firebase/firebaseConfig";

const RegistrationScreen = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    fullname: '',
    // phone: "",
    password: '',
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  console.log(inputs);
 
  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError('Please input fullname', 'fullname');
      isValid = false;
    }

    // if (inputs.phone == '') {
    //   handleError("Please input phone number", "phone");
    //   isValid = false;
    // }
    // else if (inputs.phone.length != 10) {
    //   handleError("Phone number should be 10 digit", "phone");
    //   isValid = false;
    // }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Min password length of 5', 'password');
      isValid = false;
    }

    if (isValid) {
      register();
      // handleSignup();
    }
  };




  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        // AsyncStorage.setItem('userData', JSON.stringify(inputs));
        navigation.navigate('LoginScreen');
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
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
            <Text style={{color:'#fff'}}>Need some help?</Text>
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
              style={{color: COLORS.black, fontSize:28, fontWeight: 'bold'}}>
              Getting started
            </Text>
            <Text
              style={{color: COLORS.grey, fontSize: 18, marginVertical: 10}}>
              Create account to continue!
            </Text>
           
         
       <SocialAuth/>
           
            <View style={{marginVertical: 20}}>
              <Input
                keyboardType="email-address"
                onChangeText={text => handleOnchange(text, 'email')}
                onFocus={() => handleError(null, 'email')}
                iconName="email-outline"
                label="Email"
                placeholder="Enter your email address"
                error={errors.email}
              />

              <Input
                onChangeText={text => handleOnchange(text, 'fullname')}
                onFocus={() => handleError(null, 'fullname')}
                iconName="account-outline"
                label="Full Name"
                placeholder="Enter your full name"
                error={errors.fullname}
              />

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
                    fontWeight: '500',
                    // textAlign: "center",
                    fontSize: 16,
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
              <Button title="SIGN UP" onPress={validate} isPrimary />
              <Text
                onPress={() => navigation.navigate('LoginScreen')}
                style={{
                  color: COLORS.grey,
                  fontWeight: '700',
                  textAlign: 'center',
                  fontSize: 16,
                }}>
                Already have account ?
                <Text style={{color: COLORS.lightseconary}}> Sign in</Text>
              </Text>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    
    </SafeAreaView>
  );
};

export default RegistrationScreen;
