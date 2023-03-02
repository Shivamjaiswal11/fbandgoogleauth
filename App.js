import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppNavigator } from './src/Navigation/AppNavigator'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  React.useEffect(()=>{
    SplashScreen.hide();
  },[])
  return (
    <SafeAreaView style={{flex:1}}>
      
      <AppNavigator/>

    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})