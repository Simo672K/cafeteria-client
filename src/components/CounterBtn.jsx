import { View, StyleSheet, Pressable } from 'react-native'
import Colors from '../constants/colors'

export default function CounterBtn({children, onPress}) {
  return (
    <View style={styles.btnContainer}>
      <Pressable onPress={onPress} style={styles.btnInner} android_ripple={{color:"#aaa", borderless: true}}>
        {children}
      </Pressable>
    </View>
  )
}

const styles= StyleSheet.create({
  btnContainer:{
    backgroundColor: Colors.primary,
  },
  btnInner:{
    paddingHorizontal: 10,
    paddingVertical: 8
  }
})