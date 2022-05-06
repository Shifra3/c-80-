import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import{createStackNavigator} from '@react-navigation/stack'
import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import 'react-native-gesture-handler'
const Stack=createStackNavigator()
export default function App() {
  return (
   <NavigationContainer>
   <Stack.Navigator 
   initialRouteName='Home'
   screenOptions={{headerShown:false}}
   >
     <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
     <Stack.Screen name="ISSLocation" component={IssLocationScreen}></Stack.Screen>
     <Stack.Screen name="Meteors" component={MeteorScreen}></Stack.Screen>
     
     </Stack.Navigator>  
   </NavigationContainer> 
  )
}
