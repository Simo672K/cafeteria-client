import { View, StyleSheet, SafeAreaView, Text } from 'react-native'
import BackBtn from '../components/BackBtn';
import Card from '../components/Card';
import Colors from '../constants/colors';
import DefaultBtn from '../components/DefaultBtn';

export default function Checkout() {
  return (
    <View style={styles.checkout}>
      <SafeAreaView style={styles.container}>
        <View>
          <BackBtn mode='light'/>
        </View>
        <View style={styles.checkoutMainContent}>
          
        </View>
        <Card>
          <View style={styles.cardHeader}>
            <Text style={styles.text}>Total de :</Text>
            <Text style={styles.total}>15.00 DH</Text>
          </View>
          <DefaultBtn>
            Valider La Commande
          </DefaultBtn>
        </Card>
      </SafeAreaView>
    </View>
  )
}

const styles= StyleSheet.create({
  checkout: {
    flex: 1,
  },
  container:{
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 24,
  },
  checkoutMainContent:{
    flex: 1,
  },
  cardHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  text:{
    color: Colors.primary,
    fontSize: 18,
  },
  total:{
    color: Colors.primary,
    fontSize: 22,
    fontWeight: 'bold'
  },
})