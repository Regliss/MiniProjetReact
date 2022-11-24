import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../../screens/home'
import Animes from '../../screens/anime'
import AnimeList from '../../screens/animelist'
import RandomAnime from '../../screens/randomanime'
import MangaList from'../../screens/mangalist'
import Mangas from '../../screens/manga'
import User from '../../screens/user'
import SearchAnime from '../../screens/searchAnime'
import SearchManga from '../../screens/searchManga'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name='Home'
        component={Home}
      />
      <Stack.Screen name='Animes' component={Animes} />
      <Stack.Screen name='AnimeList' component={AnimeList} />
      <Stack.Screen name='RandomAnime' component={RandomAnime} />
      <Stack.Screen name='Mangas' component={Mangas} />
      <Stack.Screen name='MangaList' component={MangaList} />
      <Stack.Screen name='User' component={User} />
      <Stack.Screen name='SearchAnime' component={SearchAnime} />
      <Stack.Screen name='SearchManga' component={SearchManga} />
    </Stack.Navigator>
  )
}

export default HomeStack