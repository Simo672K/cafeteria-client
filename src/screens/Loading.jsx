import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet, ActivityIndicator} from 'react-native'
import Container from '../components/Container'
import Title from '../components/Title'
import Colors from '../constants/colors'

export default function Loading() {
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