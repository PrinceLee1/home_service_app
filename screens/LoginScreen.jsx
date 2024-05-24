import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import styles from '../utils/styles'
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const getStarted = React.useCallback(async () => {
      try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow();
  
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
          // Use signIn or signUp for next steps such as MFA
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
    }, []);
  return (
    <View style={{alignItems: 'center'}}>
        <Image source={require('../assets/images/login.png')}
            style={styles.loginImage}
        />
        <View style={styles.subContainer}>
            <Text style={{fontSize: 27}} className="text-white text-center">Let's Find <Text className="font-bold">Professional Cleaning and Repair</Text> Services</Text>
            <Text className="text-[17px] text-white text-center mt-4">Best Place to find services near you which delivers professional services</Text>
            <TouchableOpacity style={styles.button} onPress={getStarted}>
                <Text className={"text-center text-[17px] text-[#8E3FFF]"}>Let's Get Started</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
