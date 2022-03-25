import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import User from '../../screens/user'
import Mangalist from '../../screens/mangalist'
import DetailsManga from '../../screens/detailsManga'
import Animelist from '../../screens/animelist'
import Details from '../../screens/details'
import Statistiques from '../../screens/statistiques'

const Stack = createNativeStackNavigator()

const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: true }}
        name='User'
        component={User}
      />
       <Stack.Screen name='Statistiques' component={Statistiques} />
       <Stack.Screen name='Animelist' component={Animelist} />
       <Stack.Screen name='Details' component={Details} />
       <Stack.Screen name='Mangalist' component={Mangalist} />
       <Stack.Screen name='DetailsManga' component={DetailsManga} />
    </Stack.Navigator>
  )
}

export default UserStack