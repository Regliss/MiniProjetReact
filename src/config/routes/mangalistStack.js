import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Mangalist from '../../screens/mangalist'
import DetailsManga from '../../screens/detailsManga'

const Stack = createNativeStackNavigator()

const MangalistStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Mangalist' component={Mangalist} />
      <Stack.Screen name='DetailsManga' component={DetailsManga} />
    </Stack.Navigator>
  )
}

export default MangalistStack