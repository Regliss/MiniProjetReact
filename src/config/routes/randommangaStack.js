import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RandomManga from '../../screens/randommanga'
import DetailsManga from '../../screens/detailsManga'

const Stack = createNativeStackNavigator()

const RandommangaStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='RandomManga' component={RandomManga} />
      <Stack.Screen name='DetailsManga' component={DetailsManga} />
    </Stack.Navigator>
  )
}

export default RandommangaStack