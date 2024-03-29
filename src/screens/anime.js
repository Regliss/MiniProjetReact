import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Text, Button, FlatList, TextInput } from 'react-native'
import styled from 'styled-components'
import Avatar from '../components/avatar'

const Anime = ({ navigation }) => {
const [animes, setAnimes] = useState([])
const [loading, setLoading] = useState(false) 
const [stepPage, setStepPage] = useState(1);

const getAnimes = (page) => {
  setLoading(true)
  console.log(page)
  axios({
    method: 'GET',
    url: `https://api.jikan.moe/v4/anime/`,
    params: {
      page: page,
    }
  }).then(data=>{
      // console.log(data)
      setLoading(false)
    setAnimes([...animes, ...data.data.data])
  }).catch(error => {
      setLoading(false)

    console.log(error)
  })
};

useEffect(() => {
  getAnimes(stepPage)
}, [stepPage])
// console.log(animes)

  return (
    <ViewStyled>
      <TextStyled>Animes</TextStyled>
      {/* <Button
        onPress={() => navigation.navigate('HomeStack', { screen: 'settings' })}
      >
        <TextStyled>To Home</TextStyled>
      </Button> */}
      <FlatList
        data={animes}
        keyExtractor={item => item?.mal_id}
        onEndTreshold={300}
        onEndReached = { () =>{
          if(loading) return
         setStepPage(stepPage + 1)} }
        renderItem={({ item }) => {
            console.log(item)
            return (
            <ViewStyled>
            <Avatar
                urlImage={item?.images?.jpg?.image_url}
            />
           <Text>{item?.title}</Text> 
            <Button
                title="details"
                onPress={() => navigation.navigate('Details', { id: item.mal_id })}
           >
            </Button>
            </ViewStyled>
        )} }/>
    </ViewStyled>
  );
}
// const Button = styled.TouchableOpacity``
const TextStyled = styled.Text``
const ViewStyled = styled.View`
    background-color: white;
`

export default Anime