import axios from 'axios'
import React, { useEffect, useState, useCallback } from 'react'
import { Text, ScrollView } from 'react-native'
import styled from 'styled-components'
import Avatar from '../components/avatar'
import YoutubePlayer from "react-native-youtube-iframe";

const Details = ({ route }) => {
  const [anime, setAnime] = useState({})
  const [playing, setPlaying] = useState(false);
  const {
    params: { id }
  } = route
  console.log('🚀 ~ file: details.js ~ line 8 ~ Details ~ id', id)

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://api.jikan.moe/v4/anime/${id}`
    })
      .then(data => {
          //console.log(data)
        setAnime(data.data.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <ScrollView>
    <Container>
      {/* <Avatar
        urlImage={`https:${character.thumbnail?.path.split(':')[1]}.${
          character.thumbnail?.extension
        }`}
      /> */}
      <Avatar
          urlImage={anime?.images?.jpg?.image_url}
      />
      <Text>Nom: {anime?.title}</Text>
      <Text>Nb épisodes: {anime?.episodes}</Text>
      <Text>Statut: {anime?.status}</Text>
      <Text>Genres: {anime?.genres?.map(element => {
          return element.name
      }).join(', ')}</Text>
        {
          anime?.trailer?.youtube_id !== undefined?
          <YoutubePlayer
        height={300}
        play={playing}
        videoId={ anime?.trailer.youtube_id }
        // videoId={"j2hiC9BmJlQ"}
        onChangeState={onStateChange}
      />:<>
      </>
        }
    </Container>
    </ScrollView>
  )
}

const Container = styled.View``
const ViewStyled = styled.View`
    background-color: white;
`

export default Details