import axios from 'axios'
import React, { useEffect, useState, useCallback } from 'react'
import { Text, ScrollView } from 'react-native'
import styled from 'styled-components'
import Avatar from '../components/avatar'
import { useFocusEffect, useIsFocused  } from '@react-navigation/native'

const RandomCharacters = ({ route }) => {
  const [character, setCharacter] = useState({})

  const getRandomCharacter = () => {
    return axios({
      method: 'GET',
      url: `https://api.jikan.moe/v4/random/characters`
    })
      .then(data => {
        return data.data.data
      })
      .catch(error => {
        console.log(error)
      })
  }

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;
  
      const fetchCharacter = async () => {
        try {
          const characterData = await getRandomCharacter()
  
          if (isActive) {
            setCharacter(characterData)
          }
        } catch (e) {
          // Handle error
        }
      };
  
      fetchCharacter();
  
      return () => {
        isActive = false;
        setCharacter({})
      };
    }, [])
  );

  return (
    <ScrollView>
    <Container>
      <Avatar
          urlImage={character?.images?.jpg?.image_url}
      />
      <Text>Nom: {character?.name}</Text>
      <Text>About: {character?.about}</Text>
    </Container>
    </ScrollView>
  )
}

const Container = styled.View``
const ViewStyled = styled.View`
    background-color: white;
`

export default RandomCharacters