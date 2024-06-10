import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BusinessDetailScreen from '../screens/BusinessDetailScreen';
import BookingScreen from '../screens/BookingScreen';

const Stack = createStackNavigator();

export default function BookingNavigation() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name='booking' component={BookingScreen}/>
        <Stack.Screen name='business-detail' component={BusinessDetailScreen}/>
        
    </Stack.Navigator>
  )
} 