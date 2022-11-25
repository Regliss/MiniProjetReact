import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Text, Button, FlatList } from 'react-native'
import styled from 'styled-components'
import Avatar from '../components/avatar'

const Character = ({ navigation }) => {
const [characters, setCharacters] = useState([])
const [loading, setLoading] = useState(false) 
const [stepPage, setStepPage] = useState(1);
    const ids = [ 40540, 6702, 40540, 1735, 21, 30276, 1535, 269, 5114, 16498, 11061]

const getCharacters = (page) => {
  setLoading(true)
  axios({
    method: 'GET',
    url: `https://api.jikan.moe/v4/characters/`,
    params: {
      page: page,
    }
  }).then(data=>{
      console.log(data)
      setLoading(false)
    setCharacters([...characters, ...data.data.data])
  }).catch(error => {
    setLoading(false)
    console.log(error)
  });
}

    useEffect(() => {
      getCharacters(stepPage)
    }, [stepPage])
console.log(characters)
  return (
    <ViewStyled>
      <TextStyled>Characters</TextStyled>
      {/* <Button
        onPress={() => navigation.navigate('HomeStack', { screen: 'settings' })}
      >
        <TextStyled>To Home</TextStyled>
      </Button> */}
      <FlatList
        data={characters}
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
           <Text>{item?.name}</Text> 
            <Button
                title="details"
                onPress={() => navigation.navigate('DetailsCharacter', { id: item.mal_id })}
           >
            </Button>
            </ViewStyled>
        )} }/>
    </ViewStyled>
  )
}
// const Button = styled.TouchableOpacity``
const TextStyled = styled.Text``
const ViewStyled = styled.View`
    background-color: white;
`


export default Character