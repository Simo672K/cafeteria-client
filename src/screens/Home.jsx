import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import Container from '../components/Container'

export default function Home() {
  return (
    <View style={styles.home}>
      <ImageBackground style={styles.header} resizeMode='stretch' imageStyle={{height: '100%', opacity:0.8}} source={require('../assets/images/home.png')}>
        <Text>BIENVENUE</Text>
      </ImageBackground>
      <StatusBar/>
    </View>
  )
}

const styles= StyleSheet.create({
  home:{
    flex: 1,
  },
  header:{
    height: '35%',
    backgroundColor: '#333'
  }
})