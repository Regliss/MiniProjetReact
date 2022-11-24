import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Text, Button, FlatList } from 'react-native'
import styled from 'styled-components'
import Avatar from '../components/avatar'
import malOauth from 'myanimelist-oauth'

const AnimeList = ({ navigation }) => {
const [animelist, setAnimelist] = useState([])
const [myanimelist, setMyanimelist] = useState([])
const ids = [ 40540, 6702, 40540, 1735, 21, 30276, 1535, 269, 5114, 16498, 11061]

// setMyanimelist = new malOauth({
//   clientID: "ef374fa02cfa2911892ae9603a33bcb5",
//   callback: "http://localhost:3000/callback",
//   // clientSecret: "your client secret", // not required if your application is registered as "Android", "IOS", or "Other"
// });

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

            // code-verifier = 43*128unreserved43*128unreserved43*128unreserved
            // code-challenger = NDMqMTI4dW5yZXNlcnZlZDQzKjEyOHVucmVzZXJ2ZWQ0MyoxMjh1bnJlc2VydmVk
            // token = 6434fafd7295075a26543222fb5b35f565c302b3
        }
    }
    useEffect(() => {
        // const test = myanimelist();
        // console.log(test);
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