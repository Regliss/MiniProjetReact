import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Text, Button, FlatList } from 'react-native'
import styled from 'styled-components'
import Avatar from '../components/avatar'

const AnimeList = ({ navigation }) => {
const [animelist, setAnimelist] = useState([])
    const ids = [ 40540, 6702, 40540, 1735, 21, 30276, 1535, 269, 5114, 16498, 11061]

    const handleStatus = (status) => {
        switch(status){
            case 1:
                return "Watching";
            // case 2:
            //     return "Completed";
            // case 3:
            //     return "On-Hold";
            // case 4:
            //     return "Dropped";
            // case 5:
            //     return "Plan to Watch";
        }
    }
    useEffect(() => {
        console.log('yolo')
        axios({
            method: 'GET',
            url: `https://api.jikan.moe/v4/users/dark_regliss/animelist`,
            }).then(data=>{
                console.log("yo")
                console.log(data.data.data)
                setAnimelist([...animelist, ...data.data.data])
            }).catch(error => {
            console.log(error)
            })
    }, [])
useEffect(() => {
    console.log(animelist)
    }, [animelist])
  return (
    <ViewStyled>
      <TextStyled>Thomas anime list</TextStyled>
      {/* <Button
        onPress={() => navigation.navigate('HomeStack', { screen: 'settings' })}
      >
        <TextStyled>To Home</TextStyled>
      </Button> */}
      <FlatList
        data={animelist}
        keyExtractor={item => item?.anime.mal_id}
        renderItem={({ item }) => {
            console.log(item)
            return (
            <ViewStyled>
            <Avatar
                urlImage={item?.anime.images?.jpg?.image_url}
            />
            {/* <Text>{item?.watching_status}</Text> */}
            <Text>{handleStatus(item?.watching_status)}</Text>
           <Text>{item?.anime.title}</Text> 
            <Button
                title="details"
                onPress={() => navigation.navigate('Details', { id: item.anime.mal_id })}
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


export default AnimeList