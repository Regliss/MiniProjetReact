import axios from 'axios'
import React, { useEffect, useState, useCallback } from 'react'
import { Text, ScrollView } from 'react-native'
import styled from 'styled-components'
import Avatar from '../components/avatar'

const DetailsCharacter = ({ route }) => {
  const [character, setCharacter] = useState({})
  const {
    params: { id }
  } = route
  console.log('🚀 ~ file: details.js ~ line 8 ~ Details ~ id', id)

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://api.jikan.moe/v4/characters/${id}`
    })
      .then(data => {
        setCharacter(data.data.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

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

export default DetailsCharacter