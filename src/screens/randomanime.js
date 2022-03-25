import axios from 'axios'
import React, { useEffect, useState, useCallback } from 'react'
import { Text, ScrollView } from 'react-native'
import styled from 'styled-components'
import Avatar from '../components/avatar'
import YoutubePlayer from "react-native-youtube-iframe";
import { useFocusEffect, useIsFocused  } from '@react-navigation/native'

const RandomAnime = ({ route }) => {
  const [anime, setAnime] = useState({})
  const [playing, setPlaying] = useState(false);
  const isFocused = useIsFocused()

  useEffect(() => {
    getRandomAnime()
  }, [])


  const getRandomAnime = () => {
    axios({
      method: 'GET',
      url: `https://api.jikan.moe/v4/random/anime`
    })
      .then(data => {
        setAnime(data.data.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

//   useFocusEffect(() => {
//     getRandomAnime()
//   })
// isFocused(() => {
//     getRandomAnime()
//   })

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

export default RandomAnime