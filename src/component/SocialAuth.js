import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {fbicon, gicon, twicon} from '../image';

import {
    AccessToken,
    AuthenticationToken,LoginManager,
    LoginButton,GraphRequest,GraphRequestManager,Profile
  } from 'react-native-fbsdk-next';
  import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import NavigationString from '../Navigation/NavigationString';
import { useNavigation } from '@react-navigation/native';

const SocialAuth = () => {
    const navigation = useNavigation();
    React.useEffect(()=>{
        GoogleSignin.configure();
      },[])
    const  FbLoginButton=()=> {
        LoginManager
         .logInWithPermissions(['public_profile','email'])
         .then(function (result) {
           if (result.isCancelled) {
             alert('Login cancelled');
           } else {
             AccessToken
               .getCurrentAccessToken()
               .then((data) => {
                 let accessToken = data.accessToken
                 console.log(accessToken.toString())
       
                 const responseInfoCallback = (error, result) => {
                   if (error) {
                     console.log(error)
                     alert('Error fetching data: ' + error.toString());
                   } else {
                     console.log(result)
                     navigation.navigate(NavigationString.HomeScreen,{data:result})
                     alert('Success fetching data: ' + JSON.stringify(result));
                   }
                 }
       
                 const infoRequest = new GraphRequest('/me', {
                   accessToken: accessToken,
                   parameters: {
                     fields: {
                       string: 'email,name,first_name,middle_name,last_name'
                     }
                   }
                 }, responseInfoCallback);
       
                 // Start the graph request.
                 new GraphRequestManager()
                   .addRequest(infoRequest)
                   .start()
       
               })
              //  Profile.getCurrentProfile().then(
              //   function(currentProfile) {
              //     if (currentProfile) {
              //       console.log("The current logged user is: " +
              //         currentProfile.imageURL
              //       );
              //     }
              //   }
              // );
           }
         }, function (error) {
           alert('Login fail with error: ' + error);
          });
         }
    const GoogleLogginButton = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          var userInfo = await GoogleSignin.signIn();
          console.log("googole login=====>",userInfo)
          navigation.navigate(NavigationString.HomeScreen,{data:userInfo})
          // this.setState({ userInfo });
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            Alert.alert('Your Cancel login')
            console.log(error);
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // navigation.navigate(NavigationString.HomeScreen,{data:userInfo})
            console.log(error);
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log(error);
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={(e)=>GoogleLogginButton()} >
        <Image style={[styles.image, {marginLeft: 0}]} source={gicon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={(e)=>FbLoginButton()}>
        <Image style={styles.image} source={fbicon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.image} source={twicon} />
      </TouchableOpacity>
    </View>
  );
};

export default SocialAuth;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 45,
    height: 45,
    backgroundColor: '#fff',
    resizeMode: 'contain',
    marginLeft: 15,
  },
});
