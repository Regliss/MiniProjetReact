import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Characters from '../../screens/character'
import DetailsCharacter from '../../screens/detailsCharacter'

const Stack = createNativeStackNavigator()

const CharactersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Characters' component={Characters} />
      <Stack.Screen name='DetailsCharacter' component={DetailsCharacter} />
    </Stack.Navigator>
  )
}

export default CharactersStack