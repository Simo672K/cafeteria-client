import { View, StyleSheet, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Colors from "../constants/colors"

export default function CheckoutCardDelete({onPress}) {
  return (
    <View style={styles.closeBtnContainer}>
      <Pressable onPress={onPress} style={styles.closeBtnPressable} android_ripple={{color:'#aaa', borderless: true}}>
        <Ionicons name="close" size={18} color="white" />
      </Pressable>
    </View>
  )
}

const styles= StyleSheet.create({
  closeBtnContainer:{
    width: 30,
    height: 30,
    backgroundColor: Colors.primary,
    borderRadius: 20
  },
  closeBtnPressable:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})