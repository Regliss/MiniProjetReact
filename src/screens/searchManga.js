import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Text, Button, FlatList, TextInput } from 'react-native'
import styled from 'styled-components'
import Avatar from '../components/avatar'

const searchManga = ({ navigation }) => {
const [mangas, setMangas] = useState([])
const [loading, setLoading] = useState(false) 
const [stepPage, setStepPage] = useState(1);
const [search, setSearch] = useState("");
const [searchPage, setSearchPage] = useState(1);

const updateSearch = (search) => {
  console.log(search);
  getMangasSearch(search, stepPage);
};

const handleChange = text => {
  console.log(text);
  setSearch(text);
};

const getMangasSearch = (search, page) => {
  setLoading(true)
  console.log(search)
  axios({
    method: 'GET',
    url: `https://api.jikan.moe/v4/manga/`,
    params: {
      page: page,
      q: search,
  }
  }).then(data=>{
      console.log(data)
      setLoading(false)
    setMangas([mangas, ...data.data.data])
  }).catch(error => {
    setLoading(false)
    console.log(error)
  })
};

useEffect(() => {
  // getMangas(stepPage)
}, [stepPage])
// console.log(mangas)

  return (
    <ViewStyled>
      <TextInput
        type="text"
        placeholder="Search"
        value={search}
        onChangeText={handleChange}
      />
      <Button
          title="search"
          onPress={() => updateSearch(search)}
      >
      </Button>
      <FlatList
        data={mangas}
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
                onPress={() => navigation.navigate('DetailsManga', { id: item.mal_id })}
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

export default searchManga