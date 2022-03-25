import axios from 'axios'
import React, { useEffect, useState, useCallback } from 'react'
import { Text, ScrollView } from 'react-native'
import styled from 'styled-components'
import Avatar from '../components/avatar'

const Statistiques = ({ route }) => {
  const [user, setUser] = useState({})
  useEffect(() => {
    axios({
        method: 'GET',
        url: `https://api.jikan.moe/v4/users/dark_regliss/statistics`,
        }).then(data=>{
            // console.log(data)
        setUser(data.data.data)
        }).catch(error => {
        console.log(error)
        })
}, [])
useEffect(() => {
    console.log(user)
    }, [user])

  return (
    <ScrollView>
    <Container>
      <Text>Animes</Text>
      <Text>Nb jours de visionnage: {user?.anime?.days_watched}</Text>
      <Text>Nb anime vues: {user?.anime?.completed}</Text>
      <Text>Nb anime abbandonnées: {user?.anime?.dropped}</Text>
      <Text>Nb anime en attente: {user?.anime?.plan_to_watch}</Text>
      <Text>Nb épisode vues: {user?.anime?.episodes_watched}</Text>
      <Text></Text>
    </Container>
    
    <Container>
      <Text>Mangas</Text>
      <Text>Nb jours de lecture: {user?.manga?.days_read}</Text>
      <Text>Nb manga en lecture: {user?.manga?.reading}</Text>
      <Text>Nb manga finis: {user?.manga?.completed}</Text>
      <Text>Nb manga en attente: {user?.manga?.plan_to_read}</Text>
      <Text>Nb chapitre lues: {user?.manga?.chapters_read}</Text>
    </Container>
    </ScrollView>
  )
}

const Container = styled.View``
const ViewStyled = styled.View`
    background-color: white;
`

export default Statistiques