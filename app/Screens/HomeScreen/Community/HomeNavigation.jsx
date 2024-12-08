import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../HomeScreen';
import BusinessListByCategoryScreen from '../../BusinessListByCategoryScreen/BusinessListByCategoryScreen';
import CommunityScreen from './CommunityScreen';
import GameScreen from './GameScreen';
import ChallengeScreen from './ChallengeScreen';
import VolunteerScreen from './VolunteerScreen';
import PreChallengeScreen from './PreChallengeScreen';
import QuestionScreen from './QuestionScreen';
import Question2Screen from './Question2Screen';
import Question3Screen from './Question3Screen';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    // <NavigationContainer>
   <Stack.Navigator>
    <Stack.Screen name='community' component={CommunityScreen} options={{ headerShown: false }} />
    <Stack.Screen name='Gamify' component={GameScreen} options={{ headerShown: false }} />
    <Stack.Screen name='Challenge' component={ChallengeScreen} options={{ headerShown: false }} />
    <Stack.Screen name='PreChallenge' component={PreChallengeScreen} options={{ headerShown: false }} />
    <Stack.Screen name='Questions' component={QuestionScreen} options={{ headerShown: false }} />
    <Stack.Screen name='Questions2' component={Question2Screen} options={{ headerShown: false }} />
    <Stack.Screen name='Questions3' component={Question3Screen} options={{ headerShown: false }} />
    <Stack.Screen name='Volunteer' component={VolunteerScreen} />
   </Stack.Navigator>
  )
}

// navigation.goBack()
// const param = useRoute().params;
//<ScrollView>