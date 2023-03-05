
import PushNotification, {Importance} from "react-native-push-notification"
import PushNotificationIOS from "@react-native-community/push-notification-ios";

PushNotification.configure({
    onRegister: function(token) {
      console.log("TOKEN:", token);
    },
  
    onNotification: function(notification) {
      console.log("NOTIFICATION:", notification);
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    onAction: function (notification) {
      console.log("ACTION:", notification.action);
      console.log("NOTIFICATION:", notification);
      
      // process the action
    },
  
    // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
    onRegistrationError: function(err) {
      console.error(err.message, err);
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    ///for android
    senderID:'25538986125',
    popInitialNotification: true,
  
    requestPermissions: Platform.OS === 'ios',
  });

PushNotification.createChannel(
    {
      channelId: "channel-id", // (required)
      channelName: "My channel", // (required)
      channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
      playSound: true, // (optional) default: true
      soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
      importance:Importance.HIGH, // (optionaighl) default: Importance.HIGH. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      vibration:1000,
    
    },
    (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
  );
export const localNotification1 =()=>{
    PushNotification.localNotification(
        {
          channelId: "channel-id", // (required)
          channelName: "My channel", // (required)
          channelDescription: "A channel to categorise your local notifications", // (optional) default: undefined.
          playSound: true,  // (optional) default: true
          autoCancel:true,
          bigText:'This is local notifiction',
          subText:'hii',
          title:'hiiiiiiii1',
          message:'hii shivam',
          soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
          importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
          vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
          vibration:1000,
        
        });
}
const cancelNotifications = () => {
    PushNotification.cancelAllLocalNotifications();
  };