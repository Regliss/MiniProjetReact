import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RandomAnime from '../../screens/randomanime'
import Details from '../../screens/details'

const Stack = createNativeStackNavigator()

const RandomanimeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='RandomAnime' component={RandomAnime} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  )
}

export default RandomanimeStack