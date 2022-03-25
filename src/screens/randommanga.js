import axios from 'axios'
import React, { useEffect, useState, useCallback } from 'react'
import { Text, ScrollView } from 'react-native'
import styled from 'styled-components'
import Avatar from '../components/avatar'

const RandomManga = ({ route }) => {
  const [manga, setManga] = useState({})

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://api.jikan.moe/v4/random/manga`
    })
      .then(data => {
        setManga(data.data.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

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