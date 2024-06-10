import { Alert, Platform, ToastAndroid } from "react-native";

export const currentTime = () => {
    const dt = new Date().getHours();
  let greeting;

  if (dt >= 0 && dt < 12) {
    greeting = 'Good morning';
  } else if (dt >= 12 && dt < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }
  return greeting
}

export const notifyMessage = (msg) => {
  if (Platform.OS === "android") {
      return ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
      return Alert.alert(msg);
  }
}