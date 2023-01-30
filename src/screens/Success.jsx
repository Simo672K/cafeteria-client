import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Colors from '../constants/colors'

export default function Success() {
  return (
    <View style={styles.success}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Success</Text>
      </SafeAreaView>
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
  text: {
    color: 'white',
  }
})