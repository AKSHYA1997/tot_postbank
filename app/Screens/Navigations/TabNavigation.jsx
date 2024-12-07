import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BookingScreen from '../BookingScreen/BookingScreen';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import HomeNavigation from '../HomeScreen/Community/HomeNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false,
      tabBarActiveTintColor: 'red'
      }}>
        <Tab.Screen name='home' component={HomeNavigation} 
        options={{
          tabBarLabel:({color}) => (
            <Text style={{color:color, fontSize:12, marginTop:4}}>Home</Text>
          ), tabBarIcon:({color,size}) => (
            <FontAwesome style={{marginTop:5}} name="home" size={size} color={color} />
          )
        }}
        />
        <Tab.Screen name='booking' component={BookingScreen} 
         options={{
          tabBarLabel:({color}) => (
            <Text style={{color:color, fontSize:12, marginTop:4}}>Booking</Text>
          ), tabBarIcon:({color,size}) => (
            <FontAwesome style={{marginTop:5}} name="bookmark" size={size} color={color} />
          )
        }}
        />
        <Tab.Screen name='profile' component={BookingScreen} 
         options={{
          tabBarLabel:({color}) => (
            <Text style={{color:color, fontSize:12, marginTop:4}}>Profile</Text>
          ), tabBarIcon:({color,size}) => (
            <FontAwesome style={{marginTop:5}} name="user-circle" size={size} color={color} />
          )
        }}        
        />
    </Tab.Navigator>
  )
}