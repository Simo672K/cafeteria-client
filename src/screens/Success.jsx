import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet, SafeAreaView, Image } from 'react-native'
import Title from '../components/Title'
import Colors from '../constants/colors'
import BackBtn from '../components/BackBtn'
import QRCodeDisplay from '../components/QRCodeDisplay'

export default function Success() {
  return (
    <View style={styles.success}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <BackBtn/>
        </View>
        <View style={styles.body}>
          <Title style={styles.text}>Merci Pour Votre Commande</Title>
          <QRCodeDisplay />
          <Image source={require('../assets/images/check-circle.png')}/>
        </View>
      </SafeAreaView>
      <StatusBar mode='light' />
    </View>
  )
}

const styles= StyleSheet.create({
  success: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  container:{
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 24,
  },
  header:{},
  body:{
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center'
  }
})