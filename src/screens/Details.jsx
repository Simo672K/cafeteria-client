import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native'
import ProductDetailCover from '../components/ProductDetailCover'
import Colors from '../constants/colors'
import DetailDescription from '../components/DetailDescription.jsx'
import QuantityCard from '../components/QuantityCard'

export default function Details() {
  const cover= require('../assets/images/detail-placeholder.png')
  return (
    <View style={styles.detail}>
      <ProductDetailCover img={cover}/>
      <View style={styles.main}>
        <Text style={styles.tabNav}>Detail</Text>
        <DetailDescription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias fugit tempore nihil possimus nam! Soluta nobis sapiente fugit itaque quam vitae voluptatum laudantium voluptatibus, quasi quisquam, mollitia blanditiis in natus suscipit eveniet accusantium sed deleniti, sunt nulla iusto obcaecati. Unde temporibus possimus laudantium commodi qui labore suscipit aliquam id eos!
        </DetailDescription>
        <QuantityCard/>
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