import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../constants/colors'
import { Ionicons } from '@expo/vector-icons';
import DefaultBtn from './DefaultBtn';

export default function ProductCard({title,  price, description, faved, linkTo}) {
  const navigationHandler= ()=>{
    linkTo.navigate('DetailScreen')
  }

  return (
    <View style={styles.cardContainer}>
      {/* card head */}
      <View style={styles.cardHead}>
        {/* image */}
        <Image style={{width: '100%'}} source={require('../assets/images/card-placeholder.png')}></Image>
      </View>

      {/* card body */}
      <View style={styles.cardBody}>
        <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}}>
          <Text style={styles.cardTitle}>{title}</Text>
          {
            faved?
            <Ionicons name="heart" size={24} color={Colors.primary} />
            :
            <Ionicons name="heart-outline" size={24} color={Colors.primary} />
          }
        </View>
        <View style={{padding: 8, flex: 1}}>
          <Text style={{color: Colors.secondary}}>
            {description}
          </Text>
        </View>
        <View style={styles.cardFooter}>
          <Text style={styles.cardPrice}>{price}</Text>
          <DefaultBtn onPress={navigationHandler} >Commander</DefaultBtn>
        </View>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
  cardContainer:{
    width: 200,
    height: 300,
    backgroundColor: Colors.background,
    borderRadius: 16,
    elevation: 5,
    margin: 4,
    marginLeft: 24,
    padding: 8,
  },
  cardHead:{
    flex:5,
    overflow: 'hidden',
    borderRadius: 8,
    marginBottom: 10,
  },
  cardBody:{
    flex:6
  },
  cardTitle:{
    color: Colors.primary,
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  cardFooter:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  cardPrice:{
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary
  }
})