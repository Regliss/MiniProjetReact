import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Animelist from '../../screens/animelist'
import Details from '../../screens/details'

const Stack = createNativeStackNavigator()

const AnimelistStack = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name='Animelist' component={Animelist} />
      <Stack.Screen name='Details' component={Details} /> */}
    </Stack.Navigator>
  )
}

export default AnimelistStack