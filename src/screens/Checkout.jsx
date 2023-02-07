import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native'
import BackBtn from '../components/BackBtn';
import Card from '../components/Card';
import Colors from '../constants/colors';
import DefaultBtn from '../components/DefaultBtn';
import Title from '../components/Title';
import CheckoutCard from '../components/CheckoutCard';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../context/cartSlice'

export default function Checkout({navigation}) {
  const cart = useSelector((state)=> state.cart.cart)
  const dispatch = useDispatch();

  const cartItemDeleteHandler = (id)=>{
    dispatch(removeFromCart(id))
  }

  const returnHomeHandler=()=>{
    navigation.navigate('HomeScreen')
  }
  const successHandler=()=>{
    navigation.navigate('SuccessScreen')
  }

  return (
    <View style={styles.checkout}>
      <SafeAreaView style={styles.container}>
        <View style={styles.topNavbar}>
          <BackBtn onPress={returnHomeHandler} mode='light'/>
        </View>
        <View style={styles.checkoutMainContent}>
          <Title style={{color: Colors.primary, marginTop: 40, marginBottom: 30}}>Votre Commande</Title>
          {
            cart&&cart.length?
            cart.map(item=>
              <CheckoutCard deleteHandler={cartItemDeleteHandler} key={item.id} item={item}/>
              ):
            <Text style={styles.textMuted}>Pas d'elements...</Text>
          }
        </View>
        <Card>
          <View style={styles.cardHeader}>
            <Text style={styles.text}>Total de :</Text>
            <Text style={styles.total}>15.00 DH</Text>
          </View>
          <DefaultBtn onPress={successHandler}>
            Valider La Commande
          </DefaultBtn>
        </Card>
      </SafeAreaView>
      <StatusBar style='dark' />
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
  topNavbar:{
    marginBottom: 24
  }
  ,
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
  textMuted:{
    color: Colors.filter,
    fontSize: 18,
    padding: 8,
  }
})