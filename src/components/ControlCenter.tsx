import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import { playbackService } from '../../musicPlayerServices'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { RepeatMode } from 'react-native-track-player';


const ControlCenter = () => {

  const playBackState = usePlaybackState();

  // next button
  const SkipToNext = async () => {
    await TrackPlayer.skipToNext()
  }
  // previous button
  const SkipToPrevious = async () => {
    await TrackPlayer.skipToPrevious()
  }
  // Repeat 
  const RepeatSong = async () => {
    await RepeatMode.Queue
  }

  const togglePlayback = async (playback: State) => {
    const currentTrack = await TrackPlayer.getActiveTrack()

    if (currentTrack !== null ) {

      if (playback === State.Paused || playback === State.Ready ){
        await TrackPlayer.play()
      } else {
        await TrackPlayer.pause()
      }
    }


  }

  return (
    <View style={styles.container}>
      <Pressable  
      onPress={()=>SkipToPrevious()} >
        <Icon style={styles.icon} name="skip-previous" size={40}/>
      </Pressable>
      <Pressable  
     onPress={() => { if(playBackState.state !== undefined){
      return  togglePlayback(playBackState.state)
     }}} >
        <Icon style={styles.icon} name={playBackState.state === State.Playing ? "pause" : "play-arrow" } size={75}/>
      </Pressable>
      <Pressable  
      onPress={()=> SkipToNext()} >
        <Icon style={styles.icon} name="skip-next" size={40}/>
      </Pressable>
      <Pressable  
      onPress={()=> RepeatSong()} >
        <Icon style={styles.icon} name="restart_alt" size={40}/>
      </Pressable>

    </View>
  )
}

export default ControlCenter
const styles = StyleSheet.create({
  container: {
    marginBottom: 56,

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  playButton: {
    marginHorizontal: 24,
  },
});