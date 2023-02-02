import { View, Text, StyleSheet, Image } from 'react-native'
import CheckoutCardDelete from './CheckoutCardDelete'
import Colors from '../constants/colors'

export default function CheckoutCard() {
  return (
    <View style={styles.checkoutCard}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageFluid} source={require('../assets/images/order-placeholder.png')} />
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.checkoutCardClose}>
          <CheckoutCardDelete />
        </View>
        <Text style={styles.cardTitle}>1 Cappuchino x 1</Text>
        <Text style={styles.cardText}>15.00 DH</Text>
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