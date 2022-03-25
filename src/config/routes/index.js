import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeStack from './homeStack'
import AnimesStack from './animeStack'
import MangasStack from './mangasStack'
import UserStack from './userStack'

const BottomTab = createBottomTabNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{headerShown: false}}>
        <BottomTab.Screen name='HomeStack' component={HomeStack} />
        <BottomTab.Screen name='AnimesStack' component={AnimesStack} />
        <BottomTab.Screen name='MangasStack' component={MangasStack} />
        <BottomTab.Screen name='UserStack' component={UserStack} />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

export default Routes