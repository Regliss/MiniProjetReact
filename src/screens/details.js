import axios from 'axios'
import React, { useEffect, useState, useCallback } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'
import Avatar from '../components/avatar'
import YoutubePlayer from "react-native-youtube-iframe";

const Details = ({ route }) => {
  const [manga, setManga] = useState({})
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
        setManga(data.data.data)
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
    <Container>
      {/* <Avatar
        urlImage={`https:${character.thumbnail?.path.split(':')[1]}.${
          character.thumbnail?.extension
        }`}
      /> */}
      <Text>Nom: {manga?.title}</Text>
      <Text>Nb épisodes: {manga?.episodes}</Text>
      <Text>Statut: {manga?.status}</Text>
      <Text>Genres: {manga?.genres?.map(element => {
          return element.name
      }).join(', ')}</Text>
      {/* <VideoContainer source={{uri: manga?.trailer?.url}}   // Can be a URL or a local file.
       ref={ref => (this.player = ref)}        // Store reference
       onBuffer={this.maxBufferMs}                // Callback when remote video is buffering
       onError={this.videoError}               // Callback when video cannot be loaded
        /> */}
        {
          manga?.trailer?.youtube_id !== undefined?
          <YoutubePlayer
        height={300}
        play={playing}
        videoId={ manga?.trailer.youtube_id }
        // videoId={"j2hiC9BmJlQ"}
        onChangeState={onStateChange}
      />:<>
      </>

        }
        {/* <YoutubePlayer
        height={300}
        play={playing}
        videoId={ manga?.trailer.youtube_id }
        // videoId={"j2hiC9BmJlQ"}
        onChangeState={onStateChange}
      /> */}
      {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
    </Container>
  )
}

const Container = styled.View``
// const VideoContainer = styled(Video)`
//     position: "absolute";
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
// `

export default Details