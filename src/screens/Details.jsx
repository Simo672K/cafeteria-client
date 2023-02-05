import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native'
import ProductDetailCover from '../components/ProductDetailCover'
import Colors from '../constants/colors'
import DetailDescription from '../components/DetailDescription.jsx'
import QuantityCard from '../components/QuantityCard'

export default function Details({navigation}) {
  const data={
    "id": Date.now(),
    "title": "cappucino",
    "description": "Lorem Ipsum has been the industry's It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "price": 15.00,
    "faved": true, 
  }
  const cover= require('../assets/images/detail-placeholder.png')
  return (
    <View style={styles.detail}>
      <ProductDetailCover linkTo={navigation} liked={data.faved} title={data.title} img={cover}/>
      <View style={styles.main}>
        <Text style={styles.tabNav}>Detail</Text>
        <DetailDescription>{data.description}</DetailDescription>
        <QuantityCard data={data} linkTo={navigation}/>
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
  },
  tabNav:{
    color: Colors.primary,
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 4,
  }
})