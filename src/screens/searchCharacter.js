import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Text, Button, FlatList, TextInput } from 'react-native'
import styled from 'styled-components'
import Avatar from '../components/avatar'

const SearchCharacter = ({ navigation }) => {
const [characters, setCharacters] = useState([])
const [loading, setLoading] = useState(false) 
const [stepPage, setStepPage] = useState(1);
const [search, setSearch] = useState("");
const [searchPage, setSearchPage] = useState(1);

const updateSearch = (search) => {
  console.log(search);
  getCharactersSearch(search, stepPage);
};

const handleChange = text => {
  console.log(text);
  setSearch(text);
};

const getCharactersSearch = (search, page) => {
  setLoading(true)
  console.log(search)
  axios({
    method: 'GET',
    url: `https://api.jikan.moe/v4/characters/`,
    params: {
      page: page,
      q: search,
  }
  }).then(data=>{
      console.log(data)
      setLoading(false)
    setCharacters([characters, ...data.data.data])
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
           <Text>{item?.title}</Text> 
            <Button
                title="details"
                onPress={() => navigation.navigate('DetailsCharacter', { id: item.mal_id })}
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

export default SearchCharacter