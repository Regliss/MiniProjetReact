import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RandomCharacter from '../../screens/randomCharacters'
import DetailsCharacter from '../../screens/detailsCharacter'

const Stack = createNativeStackNavigator()

const RandomcharacterStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='RandomCharacter' component={RandomCharacter} />
      <Stack.Screen name='DetailsCharacter' component={DetailsCharacter} />
    </Stack.Navigator>
  )
}

export default RandomcharacterStack