import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login from '../screen/Login';
// import SignUp from '../screen/Signup';
import LoginScreen from '../screen/LoginScreen';
import RegistrationScreen from '../screen/RegistrationScreen';
import HomeScreen from '../screen/HomeScreen';
import SplashScreen from "../screen/SplashScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  NavigationContainer,
} from '@react-navigation/native';
// import Homeheader from "../component/Homeheader";
const Stack = createNativeStackNavigator();

export const AppNavigator =()=> {
  const [initialRouteName, setInitialRouteName] = React.useState("");

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     authUser();
  //   }, 2000);
  // }, []);
  // const authUser = async () => {
  //   try {
  //     let userData = await AsyncStorage.getItem("userData");
  //     if (userData) {
  //       userData = JSON.parse(userData);
  //       if (userData.loggedIn) {
  //         setInitialRouteName("WelcomeScreen");
  //       } else {
  //         setInitialRouteName("LoginScreen");
  //       }
  //     } else {
  //       setInitialRouteName("RegistrationScreen");
  //     }
  //   } catch (error) {
  //     setInitialRouteName("RegistrationScreen");
  //   }
  // };
  return (
    <NavigationContainer>
    {/* {!initialRouteName ? (
      // <Loader visible={true} />
      null
    ) : (
      <> */}
    <Stack.Navigator
    //   initialRouteName="Home"
    initialRouteName={SplashScreen}
      screenOptions={{
        headerShown: true,
      }}
      // screenOptions={{ header: () => <Homeheader /> }}
    >
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false, headerSearchBarOptions: false }}
      />
      <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
        options={{ headerShown: false, headerSearchBarOptions: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false, headerSearchBarOptions: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        // options={{ header: () => <Homeheader /> }}
        options={{ headerShown: false, headerSearchBarOptions: false }}
      />
     {/* <Stack.Screen
        name="ProductPage"
        component={ProductPage}
        options={{ headerShown: false, headerSearchBarOptions: false }}
      /> */}
      
    </Stack.Navigator>
    {/* </>
    )} */}
    </NavigationContainer>
  );
}