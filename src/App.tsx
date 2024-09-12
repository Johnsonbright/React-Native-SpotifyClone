import { View, Text, SafeAreaView, StatusBar, StyleSheet, ActivityIndicator } from 'react-native'
import React , {useState, useEffect} from 'react'
import type { PropsWithChildren } from 'react'
import { setupPlayer, addTrack } from '../musicPlayerServices'

const App = () => {
const [isPlayerReady, setIsPlayerReady] = useState(false)

async function setup() {
  let isSetup = await setupPlayer()

if(isSetup) {
    await addTrack()
  }
  setIsPlayerReady(isSetup)
}

useEffect(() => {
  setup()
}, [])

if(!isPlayerReady) {
  return (
    <SafeAreaView>
      <ActivityIndicator/>
    </SafeAreaView>
  )
}

  return (
   <SafeAreaView>
     <StatusBar/>
 
     <Text>Testing app</Text>

   </SafeAreaView>
  )
}

const style = StyleSheet.create({

  container: {
    flex: 1
  }
})

export default App