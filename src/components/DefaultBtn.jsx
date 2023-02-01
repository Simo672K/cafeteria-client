import { View, Text, Pressable, StyleSheet } from 'react-native'
import Colors from '../constants/colors'

export default function DefaultBtn({children}) {
  return (
    <View style={styles.btnContainer}>
      <Pressable style={styles.btnInner} android_ripple={{color:"#aaa", borderless: true}}  >
        <Text style={{color: 'white', textAlign: 'center'}}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles= StyleSheet.create({
  btnContainer:{
    backgroundColor: Colors.primary,
    borderRadius: 8
  },
  btnInner:{
    // paddingHorizontal: 12,
    // paddingVertical: 12,
    padding: 12,
  }
})