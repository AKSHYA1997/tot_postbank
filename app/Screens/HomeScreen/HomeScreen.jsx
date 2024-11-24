import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'

export default function HomeScreen() {
  return (
    <View>
      <Header />
      <Slider />
    </View>
  )
}