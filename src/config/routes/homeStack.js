import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../../screens/home'
import Settings from '../../screens/settings'
import Animes from '../../screens/anime'
import AnimeList from '../../screens/animelist'
import MangaList from'../../screens/mangalist'
import Mangas from '../../screens/manga'
import User from '../../screens/user'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name='Home'
        component={Home}
      />
      <Stack.Screen name='Settings' component={Settings} />
      <Stack.Screen name='Animes' component={Animes} />
      <Stack.Screen name='AnimeList' component={AnimeList} />
      <Stack.Screen name='Mangas' component={Mangas} />
      <Stack.Screen name='MangaList' component={MangaList} />
      <Stack.Screen name='User' component={User} />
    </Stack.Navigator>
  )
}

export default HomeStack