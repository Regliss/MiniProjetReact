import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Text, Button, FlatList } from 'react-native'
import styled from 'styled-components'
import Avatar from '../components/avatar'

const MangaList = ({ navigation }) => {
const [mangalist, setMangalist] = useState([])
    const ids = [ 40540, 6702, 40540, 1735, 21, 30276, 1535, 269, 5114, 16498, 11061]

    const handleStatus = (status) => {
        switch(status){
            case 1:
                return "Reading";
            case 2:
                return "Completed";
            case 3:
                return "On-Hold";
            case 4:
                return "Dropped";
            case 5:
                return "Plan to Read";
        }
    }
    useEffect(() => {
        // for(id in ids) {
            // console.log(ids[id])
            axios({
                method: 'GET',
                url: `https://api.jikan.moe/v4/users/dark_regliss/mangalist`,
              }).then(data=>{
                  console.log(data.data.data)
                  setMangalist([...mangalist, ...data.data.data])
              }).catch(error => {
                console.log(error)
              })
        // })
    }, [])
console.log(mangalist)
  return (
    <ViewStyled>
      <TextStyled>Thomas manga list</TextStyled>
      {/* <Button
        onPress={() => navigation.navigate('HomeStack', { screen: 'settings' })}
      >
        <TextStyled>To Home</TextStyled>
      </Button> */}
      <FlatList
        data={mangalist}
        keyExtractor={item => item?.manga.mal_id}
        renderItem={({ item }) => {
            console.log(item)
            return (
            <ViewStyled>
            <Avatar
                urlImage={item?.manga.images?.jpg?.image_url}
            />
            {/* <Text>{item?.watching_status}</Text> */}
            <Text>{handleStatus(item?.reading_status)}</Text>
           <Text>{item?.manga.title}</Text> 
            <Button
                title="details"
                onPress={() => navigation.navigate('DetailsManga', { id: item.manga.mal_id })}
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


export default MangaList