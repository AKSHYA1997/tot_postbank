import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ClerkProvider } from '@clerk/clerk-expo'
import Login from './Screens/LoginScreen/Login';
import TabNavigation from './Screens/Navigations/TabNavigation';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native"
import { useFonts } from 'expo-font';
import HomeScreen from './Screens/HomeScreen/HomeScreen';

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

export default function App() {
  const [ fontsLoaded ] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf')
  });

  return (
    // <ClerkProvider tokenCache={tokenCache} publishableKey='pk_test_bWFnbmV0aWMtYnVnLTU0LmNsZXJrLmFjY291bnRzLmRldiQ'>
    <View style={styles.container}>
      <HomeScreen />
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