import { View, Text, StyleSheet, Image } from 'react-native'
import CheckoutCardDelete from './CheckoutCardDelete'
import Colors from '../constants/colors'
import { removeFromCart } from '../context/cartSlice'
import { useDispatch } from 'react-redux'

export default function CheckoutCard({item}) {
  const dispatch = useDispatch();

  const cartItemDeleteHandler = ()=>{
    dispatch(removeFromCart(item.id))
  }
  
  return (
    <View style={styles.checkoutCard}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageFluid} source={require('../assets/images/order-placeholder.png')} />
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.checkoutCardClose}>
          <CheckoutCardDelete onPress={cartItemDeleteHandler} />
        </View>
        <Text style={styles.cardTitle}>1 {item.title} x {item.quantity}</Text>
        <Text style={styles.cardText}>{item.price} DH</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  checkoutCard:{
    backgroundColor: 'white',
    elevation: 6,
    borderRadius: 22,
    flexDirection: 'row',
    height: 75,
    marginBottom: 16,
  },
  imageContainer:{
    width: '25%',
    overflow: 'hidden',
    borderRadius: 22,
  },
  imageFluid:{
    height: '100%',
    minWidth: '100%'
  }
  ,
  descriptionContainer:{
    flex: 1,
    position: 'relative',
    padding: 12,
  },
  checkoutCardClose:{
    position: 'absolute',
    right: 8,
    top: 8,
  },
  cardTitle:{
    fontSize: 20,
    fontWeight: '500',
    color: Colors.primary,
    marginBottom: 4
  },
  cardText:{
    color: Colors.secondary,
    fontSize: 10
  }
})