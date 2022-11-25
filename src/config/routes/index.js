import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeStack from './homeStack'
import AnimesStack from './animeStack'
import RandomanimeStack from './randomanimeStack';
import MangasStack from './mangasStack'
import RandommangaStack from './randommangaStack';
import CharactersStack from './characterStack';
import RandomcharacterStack from './randomcharacterStack';
import UserStack from './userStack'

const BottomTab = createBottomTabNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{headerShown: false, tabBarHideOnKeyboard:true}}>
        <BottomTab.Screen options={{ tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} name='HomeStack' component={HomeStack} />
        <BottomTab.Screen options={{ tabBarLabel: 'Animes', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="monitor" color={color} size={size} />
          ),
        }} name='AnimesStack' component={AnimesStack} />
        <BottomTab.Screen options={{ tabBarLabel: 'Random', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="monitor" color={color} size={size} />
          ),
        }} name='RandomanimeStack' component={RandomanimeStack} />
        <BottomTab.Screen options={{ tabBarLabel: 'Mangas', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open-blank-variant" color={color} size={size} />
          ),
        }} name='MangasStack' component={MangasStack} />
        <BottomTab.Screen options={{ tabBarLabel: 'Random', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open-blank-variant" color={color} size={size} />
          ),
        }} name='RandommangaStack' component={RandommangaStack} />
        <BottomTab.Screen options={{ tabBarLabel: 'Characters', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open-blank-variant" color={color} size={size} />
          ),
        }} name='CharactersStack' component={CharactersStack} />
        <BottomTab.Screen options={{ tabBarLabel: 'Random', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open-blank-variant" color={color} size={size} />
          ),
        }} name='RandomcharacterStack' component={RandomcharacterStack} />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

export default Routes