import { View, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/colors';
import React from 'react'

export default function RatingStars() {
  const size= 16
  return (
    <View style={styles.rating}>
      <MaterialIcons name="star" size={size} color={Colors.primary} />
      <MaterialIcons name="star" size={size} color={Colors.primary} />
      <MaterialIcons name="star" size={size} color={Colors.primary} />
      <MaterialIcons name="star-half" size={size} color={Colors.primary} />
      <MaterialIcons name="star-outline" size={size} color={Colors.primary} />
    </View>  
  )
}

const styles= StyleSheet.create({
  rating:{
    flexDirection: 'row',
  }
})