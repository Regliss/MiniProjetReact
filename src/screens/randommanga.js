import axios from 'axios'
import React, { useEffect, useState, useCallback } from 'react'
import { Text, ScrollView } from 'react-native'
import styled from 'styled-components'
import Avatar from '../components/avatar'
import { useFocusEffect, useIsFocused  } from '@react-navigation/native'

const RandomManga = ({ route }) => {
  const [manga, setManga] = useState({})

  const getRandomManga = () => {
    return axios({
      method: 'GET',
      url: `https://api.jikan.moe/v4/random/manga`
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
  
      const fetchManga = async () => {
        try {
          const mangaData = await getRandomManga()
  
          if (isActive) {
            setManga(mangaData)
          }
        } catch (e) {
          // Handle error
        }
      };
  
      fetchManga();
  
      return () => {
        isActive = false;
        setManga({})
      };
    }, [])
  );

  return (
    <ScrollView>
    <Container>
      <Avatar
          urlImage={manga?.images?.jpg?.image_url}
      />
      <Text>Nom: {manga?.title}</Text>
      <Text>Nb chapitre: {manga?.chapters}</Text>
      <Text>Nb tome: {manga?.volumes}</Text>
      <Text>Statut: {manga?.status}</Text>
      <Text>Genres: {manga?.genres?.map(element => {
          return element.name
      }).join(', ')}</Text>
    </Container>
    </ScrollView>
  )
}

const Container = styled.View``
const ViewStyled = styled.View`
    background-color: white;
`

export default RandomManga