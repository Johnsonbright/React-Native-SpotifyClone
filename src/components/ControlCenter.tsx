import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import { playbackService } from '../../musicPlayerServices'
import Icon from 'react-native-vector-icons/MaterialIcons'


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
     onPress={() => togglePlayback(playBackState)} >
        <Icon style={styles.icon} name={playBackState === State.Playing ? "pause" : "play-arrow " } size={75}/>
      </Pressable>
      <Pressable  
      onPress={()=> SkipToNext()} >
        <Icon style={styles.icon} name="skip-previous" size={40}/>
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