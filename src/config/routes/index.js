import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeStack from './homeStack'
import AnimesStack from './charactersStack'
import MangasStack from './mangasStack'
import AnimelistStack from './animelistStack'

const BottomTab = createBottomTabNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name='HomeStack' component={HomeStack} />
        <BottomTab.Screen name='AnimesStack' component={AnimesStack} />
        <BottomTab.Screen name='AnimelistStack' component={AnimelistStack} />
        <BottomTab.Screen name='MangasStack' component={MangasStack} />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

export default Routes