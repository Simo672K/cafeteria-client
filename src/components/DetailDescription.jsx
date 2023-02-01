import { StyleSheet, View, Text } from 'react-native'
import Colors from '../constants/colors'

export default function DetailDescription({children}) {
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.description}>{children}</Text>
    </View>
  )
}


const styles= StyleSheet.create({
  descriptionContainer:{
    flex: 1,
  },
  description: {
    color: Colors.secondary,
    lineHeight: 20,
    fontSize: 14,
  }
})