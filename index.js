/**
 * @format
 */

import {AppRegistry,Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
// import PushNotification from "react-native-push-notification";

//   PushNotification.configure({
//     onRegister: async function (token) {
//     },
  
//     onNotification: function (notification) {
//       PushNotification.localNotification({
//         channelId: "first channel",
//         title: notification.title,
//         message: notification.message,

//         // foreground: true,
//         // ignoreInForeground: false
//       });
//     },
//     onAction: function (notification) {
//     },
//     permissions: {
//       alert: true,
//       badge: true,
//       sound: true,
//     },
//     popInitialNotification: true,
//     requestPermissions: true,
//   });
import PushNotification from 'react-native-push-notification';

// PushNotification.configure({
//   onRegister: function(token) {
//     console.log("TOKEN:", token);
//   },

//   onNotification: function(notification) {
//     console.log("NOTIFICATION:", notification);
//     notification.finish(PushNotificationIOS.FetchResult.NoData);
//   },
//   onAction: function (notification) {
//     console.log("ACTION:", notification.action);
//     console.log("NOTIFICATION:", notification);

//     // process the action
//   },

//   // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
//   onRegistrationError: function(err) {
//     console.error(err.message, err);
//   },
//   permissions: {
//     alert: true,
//     badge: true,
//     sound: true,
//   },

//   popInitialNotification: true,

//   requestPermissions: Platform.OS === 'ios',
// });
// PushNotification.createChannel(
//     {
//       channelId: "channel-id", // (required)
//       channelName: "My channel", // (required)
//       channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
//       playSound: true, // (optional) default: true
//       soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
//       importance:'high', // (optionaighl) default: Importance.HIGH. Int value of the Android notification importance
//       vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
//       vibration:1000,
    
//     },
//     (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
//   );
AppRegistry.registerComponent(appName, () => App);
