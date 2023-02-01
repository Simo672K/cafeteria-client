import { StyleSheet, View, Text } from 'react-native'
import Colors from '../constants/colors';
import RatingStars from './RatingStars';

export default function ProductPriceRate({price, rate}) {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>{price} DH</Text>
      <RatingStars rate={rate}/>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{

  },
  price:{
    color: Colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
})