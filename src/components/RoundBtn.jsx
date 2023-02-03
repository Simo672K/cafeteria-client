import { View, Pressable, StyleSheet } from 'react-native'

export default function RoundBtn({children, onPress}) {
  return (
    <View style={styles.btn}>
      <Pressable onPress={onPress} android_ripple={{color:'white', borderless:true}} style={styles.btnInner}>
        {children}
      </Pressable>
    </View>
  )
}


const styles= StyleSheet.create({
  btn:{
    width:35,
    height: 35,
  },
  btnInner:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  }
})