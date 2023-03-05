import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

 export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmtoken();
  }
}
const getFcmtoken = async ()=>{
    let fcmtoken= await AsyncStorage.getItem('fcmtoken');
    console.log("old fcm fcmtoken=====>",fcmtoken)
    if(!fcmtoken){
        try {
            const fcmtoken = await messaging().getToken();
            if(fcmtoken){
                console.log("new fcm fcmtoken=====>",fcmtoken);
                await AsyncStorage.setItem('fcmtoken',fcmtoken);
            }
        } catch (error) {
            console.log(error,"error rise in fcmToken");
            Alert.alert(error.message)
            
        }
    }

}
export const notificationListner = async ()=>{
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
        // navigation.navigate(remoteMessage.data.type);
      });
      messaging().onMessage(async remoteMessage =>{
        console.log("Recived in forground",remoteMessage)
      });
      messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        //   setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
        // setLoading(false);
      });
} 