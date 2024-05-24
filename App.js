import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './navigation/TabNavigation';
import { useFonts } from 'expo-font';


export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-black': require('./assets/fonts/Outfit-Black.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'outfit-extra-bold': require('./assets/fonts/Outfit-ExtraBold.ttf'),
    'outfit-extra-light': require('./assets/fonts/Outfit-ExtraLight.ttf'),
    'outfit-light': require('./assets/fonts/Outfit-Light.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-semibold': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'outfit-thin': require('./assets/fonts/Outfit-Thin.ttf'),

  });
  const tokenCache = {
    async getToken(key) {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    async saveToken(key, value) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    },
  };
  return (
    <ClerkProvider
    tokenCache={tokenCache}
    publishableKey='pk_test_c21hc2hpbmctZ2hvc3QtNzIuY2xlcmsuYWNjb3VudHMuZGV2JA'>
      <View style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
        <LoginScreen/>
        </SignedOut>
        <StatusBar style="auto" />
    </View>
    </ClerkProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
