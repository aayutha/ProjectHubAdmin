
import React from 'react'
import { View, Text,StyleSheet,style,Image } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './screens/TabNavigator';
import ReviewDetails from './screens/ReviewDetail';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color:"black"}}>Settings</Text>
    </View>
  );
}

const Stack=createNativeStackNavigator();

const App = () => {
  return ( 
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown:false
          }}
        >
          <Stack.Screen name='tab' component={TabNavigator} />
          <Stack.Screen name='details' component={ReviewDetails} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App