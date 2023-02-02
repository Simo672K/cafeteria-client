import { View, StyleSheet } from 'react-native'

export default function Card({children}) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}


const styles= StyleSheet.create({
  card:{
    backgroundColor: 'white',
    marginBottom: 24,
    padding: 18,
    elevation: 6,
    borderRadius: 16,
  },
})