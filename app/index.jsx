import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ClerkProvider } from '@clerk/clerk-expo'
import Login from './Screens/LoginScreen/Login';
import TabNavigation from './Screens/Navigations/TabNavigation';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native"
import { useFonts } from 'expo-font';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import BookingScreen from './Screens/BookingScreen/BookingScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CommunityScreen from './Screens/HomeScreen/Community/CommunityScreen';

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch(err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  }
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [ fontsLoaded ] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf')
  });

  return (
    // <ClerkProvider tokenCache={tokenCache} publishableKey='pk_test_bWFnbmV0aWMtYnVnLTU0LmNsZXJrLmFjY291bnRzLmRldiQ'>
    <View style={styles.container}>
                <Tab.Navigator screenOptions={{
      headerShown:false,
      tabBarActiveTintColor: '#003366',
      tabBarInactiveTintColor: '#bcbcbc'
      }}>
        <Tab.Screen name='Overview' component={HomeScreen} 
        options={{
          tabBarLabel:({color}) => (
            <Text style={{color:color, fontSize:9.5, marginTop:4}}>Overview</Text>
          ), tabBarIcon:({color,size}) => (
            <Image
            source={require('../assets/icons/icon.jpg')}
            style={{width: 30, height: 30, borderRadius: 7}}
          />
          )
        }}
        />
        <Tab.Screen name='Transfer' component={BookingScreen} 
         options={{
          tabBarLabel:({color}) => (
            <Text style={{color:color, fontSize:9.5, marginTop:4}}>Transfer</Text>
          ), tabBarIcon:() => (
            <Image
            source={require('../assets/icons/transfer1.png')}
            style={{width: 25, height: 25}}
          />
          )
        }}
        />
        <Tab.Screen name='Invest' component={BookingScreen} 
         options={{
          tabBarLabel:({color}) => (
            <Text style={{color:color, fontSize:9.5, marginTop:4}}>Invest</Text>
          ), tabBarIcon:() => (
            <Image
            source={require('../assets/icons/invest.png')}
            style={{width: 25, height: 25}}
          />
          )
        }}        
        />
                                <Tab.Screen name='Community' component={CommunityScreen} 
         options={{
          tabBarLabel:({color}) => (
            <Text style={{color:color, fontSize:9.5, marginTop:4}}>Community</Text>
          ), tabBarIcon:() => (
            <Image
            source={require('../assets/icons/community.png')}
            style={{width: 25, height: 25}}
          />
          )
        }}        
        />
                <Tab.Screen name='Products' component={BookingScreen} 
         options={{
          tabBarLabel:({color}) => (
            <Text style={{color:color, fontSize:9.5, marginTop:4}}>Products</Text>
          ), tabBarIcon:() => (
            <Image
            source={require('../assets/icons/products.png')}
            style={{width: 25, height: 25}}
          />
          )
        }}        
        />
                <Tab.Screen name='Services' component={BookingScreen} 
         options={{
          tabBarLabel:({color}) => (
            <Text style={{color:color, fontSize:9.5, marginTop:4}}>Services</Text>
          ), tabBarIcon:() => (
            <Image
            source={require('../assets/icons/service.png')}
            style={{width: 25, height: 25}}
          />
          )
        }}        
        />
    </Tab.Navigator>
    </View>
    // </ClerkProvider>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20
    }
})