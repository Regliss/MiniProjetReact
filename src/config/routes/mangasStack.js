import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Mangas from '../../screens/manga'
import DetailsManga from '../../screens/detailsManga'

const Stack = createNativeStackNavigator()

const MangasStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Mangas' component={Mangas} />
      <Stack.Screen name='DetailsManga' component={DetailsManga} />
    </Stack.Navigator>
  )
}

export default MangasStack