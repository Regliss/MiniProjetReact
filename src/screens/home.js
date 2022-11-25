import React from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '../components/card'
import Avatar from '../components/avatar'
import { CommonText } from '../components/texts'

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <Image source={{
        uri: 'https://image.myanimelist.net/ui/OK6W_koKDTOqqqLDbIoPAphlZzlTj5CPK0fFssPvFnc'
      }} />

      <TextStyled>Home</TextStyled>
      {/* <Button onPress={() => navigation.navigate('Login')}>
        <TextStyled>To Login</TextStyled>
      </Button>
      <Button onPress={() => navigation.navigate('Settings')}>
        <TextStyled>To Settings</TextStyled>
      </Button> */}
      <Button onPress={() => navigation.navigate('Animes')}>
        <TextStyled>To Animes</TextStyled>
      </Button>
      {/* <Button onPress={() => navigation.navigate('Animelist')}> */}
      {/* <Button
        onPress={() => navigation.navigate('AnimelistStack', { screen: 'Animelist' })}
      >
        <TextStyled>To my anime list</TextStyled>
      </Button> */}
      <Button onPress={() => navigation.navigate('SearchAnime')}>
        <TextStyled>To Animes Search</TextStyled>
      </Button>
      <Button onPress={() => navigation.navigate('Mangas')}>
        <TextStyled>To Mangas</TextStyled>
      </Button>
      <Button onPress={() => navigation.navigate('SearchManga')}>
        <TextStyled>To Mangas Search</TextStyled>
      </Button>

      <Button onPress={() => navigation.navigate('Character')}>
        <TextStyled>To Characters</TextStyled>
      </Button>
      <Button onPress={() => navigation.navigate('SearchCharacter')}>
        <TextStyled>To Characters Search</TextStyled>
      </Button>
      {/* <Button onPress={() => navigation.navigate('Mangalist')}> */}
      {/* <Button
        onPress={() => navigation.navigate('MangalistStack', { screen: 'Mangalist' })}
      >
        <TextStyled>To my manga list</TextStyled>
      </Button> */}
    </ScrollView>
  )
}

const TextStyled = styled.Text``
const Button = styled.TouchableOpacity``
const Image = styled.Image`
  width: 100%;
  height: 100px;
`

Home.propTypes = {}

export default Home