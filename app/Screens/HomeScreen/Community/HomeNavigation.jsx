import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../HomeScreen';
import BusinessListByCategoryScreen from '../../BusinessListByCategoryScreen/BusinessListByCategoryScreen';
import CommunityScreen from './CommunityScreen';
import GameScreen from './GameScreen';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    // <NavigationContainer>
   <Stack.Navigator>
    <Stack.Screen name='community' component={CommunityScreen} options={{ headerShown: false }} />
    <Stack.Screen name='Gamify' component={GameScreen} options={{ headerShown: false }} />
   </Stack.Navigator>
  )
}

// navigation.goBack()
// const param = useRoute().params;
//<ScrollView>