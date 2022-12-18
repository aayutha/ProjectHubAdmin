
import React from 'react'
import { View, Text,StyleSheet,style,Image } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color:"black"}}>Home</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color:"black"}}>Settings</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {
  return ( 
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown:false,
          tabBarShowLabel: false,
          showIcon: false,
          tabBarStyle:[ {
            position:"absolute",
            bottom:25,
            left:20,
            right:20,
            elevation:0,
            backgroundColor:"#ffffff",
            borderRadius:15,
            height:90,
            ...styles.shadow
          },],
          activeTintColor: 'pink',
        }}
      >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon:({focused})=>(
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Image
            source={{uri:"https://cdn-icons-png.flaticon.com/128/25/25694.png"}}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              // marginLeft:5,
              tintColor:focused ? '#047BD5' : 'black'
            }}
            />
            <Text style={{color:focused ? '#047BD5' : 'black',fontFamily:"SourceSansPro-Regular"}}>Home</Text>
          </View>
        )
      }}/>

      <Tab.Screen name='Settings' component={SettingsScreen} options={{
        tabBarIcon:({focused})=>(
          <View>
            <Image
            source={{uri:"https://cdn-icons-png.flaticon.com/128/3524/3524659.png"}}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              marginLeft:20,
              tintColor:focused ? '#047BD5' : 'black'
            }}
            />
            <Text style={{color:focused ? '#047BD5' : 'black',textAlign:"center",fontFamily:"SourceSansPro-Regular"}}>Settings</Text>
          </View>
        )
      }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles= StyleSheet.create({
  shadow:{
    shadowColor:"lightblue",
    shadowOffset:{
      width:0,
      height:10,
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5
  }
});

export default App