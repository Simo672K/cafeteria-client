import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native'
import ProductDetailCover from '../components/ProductDetailCover'
import Colors from '../constants/colors'

export default function Details() {
  const cover= require('../assets/images/detail-placeholder.png')
  return (
    <View style={styles.detail}>
      <ProductDetailCover img={cover}/>
      <View style={styles.main}>
        <Text>Detail</Text>
      </View>
      <StatusBar style='light'/>
    </View>
  )
}

const styles= StyleSheet.create({
  detail:{
    flex: 1,
  }, 
  main:{
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 24,
  }
})