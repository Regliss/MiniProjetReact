import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Text, Button, FlatList } from 'react-native'
import styled from 'styled-components'
import Avatar from '../components/avatar'

const Anime = ({ navigation }) => {
const [animes, setAnimes] = useState([])
    const ids = [ 40540, 6702, 40540, 1735, 21, 30276, 1535, 269, 5114, 16498, 11061]
    useEffect(() => {
        // for(id in ids) {
            // console.log(ids[id])
            axios({
                method: 'GET',
                url: `https://api.jikan.moe/v4/anime/`,
              }).then(data=>{
                  console.log(data)
                setAnimes([...animes, ...data.data.data])
              }).catch(error => {
                console.log(error)
              })
        // })
    }, [])
console.log(animes)
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
  )
}
// const Button = styled.TouchableOpacity``
const TextStyled = styled.Text``
const ViewStyled = styled.View`
    background-color: white;
`


export default Anime