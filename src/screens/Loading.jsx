import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { View, StyleSheet, ActivityIndicator} from 'react-native'
import Container from '../components/Container'
import Title from '../components/Title'
import Colors from '../constants/colors'
import { fetchRoute } from "../api/http";
import { setProducts } from '../context/productsListSlice' 
import { useDispatch, useSelector } from 'react-redux'

export default function Loading({navigation}) {
  const [data, setData] = useState()
  const dispatch = useDispatch()
  const products= useSelector((state)=> state.products.productsList)

  useEffect(()=>{
    fetchRoute('products.json').then(r=> setData(r.data))
  }, [])
  
  useEffect( ()=>{
    dispatch(setProducts(data))
  }, [data])
  
  if (products[0]){
    setTimeout(()=>navigation.navigate('HomeScreen'), 2000)
  }

  // console.log(data)
  return (
    <View style={styles.loading}>
      <Container>
        <View style={styles.head}>
          <View style={styles.textContainer}>
            <Title style={{fontSize: 36, textAlign:'center', color: Colors.primary}}>CAFETERIA CMC</Title>
          </View>
        </View>
        <View style={styles.loderContainer}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      </Container>
      <StatusBar/>
    </View>
  )
}

const styles= StyleSheet.create({
  loading:{
    flex: 1
  },
  textContainer:{
    width: 250,
  },
  head:{
    flex: 4,
    alignItems: 'center',
    paddingTop: 50,
  },
  loderContainer:{
    flex: 1
  }
})