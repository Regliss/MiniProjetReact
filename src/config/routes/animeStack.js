import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Animes from '../../screens/anime'
import Details from '../../screens/details'

const Stack = createNativeStackNavigator()

const AnimesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Animes' component={Animes} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  )
}

export default AnimesStack