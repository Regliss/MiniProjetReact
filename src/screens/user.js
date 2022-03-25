import axios from 'axios'
import React, { useEffect, useState, } from 'react'
import { Text, ScrollView } from 'react-native'
import styled from 'styled-components'
import Avatar from '../components/avatar'

const User = ({ navigation }) => {

  return (
    <ScrollView>
     <Button onPress={() => navigation.navigate('UserStack', { screen: 'Statistiques' })}>
        <TextStyled>To my Statistiques</TextStyled>
      </Button>
     <Button onPress={() => navigation.navigate('AnimeList')}>
        <TextStyled>To my anime list</TextStyled>
      </Button>
      <Button onPress={() => navigation.navigate('UserStack', { screen: 'Mangalist' })}>
        <TextStyled>To my manga list</TextStyled>
      </Button>
    </ScrollView>
  )
}

const TextStyled = styled.Text``
const Button = styled.TouchableOpacity``

export default User