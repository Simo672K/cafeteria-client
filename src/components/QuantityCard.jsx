import {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import DefaultBtn from './DefaultBtn'
import QuantityCardLabel from './QuantityCardLabel'
import QuantityCounter from './QuantityCounter'
import Colors from '../constants/colors'
import Card from './Card'

export default function QuantityCard({linkTo}) {
  const handelPress=()=>{
    linkTo.navigate('SuccessScreen')
  }
  return (
    <Card>
      <View style={styles.quantityCardHeader}>
        <QuantityCardLabel title="1 Cappucino" subTitle="15.00 DH"/>
        <QuantityCounter/>
      </View>
      <View style={styles.quantityCardMain}>
        <Text style={styles.text}>Total de :</Text>
        <Text style={styles.total}>15.00 DH</Text>
      </View>
      <DefaultBtn onPress={handelPress}>
        Commander
      </DefaultBtn>
    </Card>
  )
}

const styles= StyleSheet.create({
  quantityCard:{
    backgroundColor: 'white',
    marginBottom: 24,
    padding: 18,
    elevation: 6,
    borderRadius: 16,
  },
  quantityCardHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityCardMain:{
    marginTop: 8,
    marginBottom: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text:{
    color: Colors.primary,
    fontSize: 16,
  },
  total:{
    color: Colors.primary,
    fontSize: 18,
    fontWeight: 'bold'
  },
})