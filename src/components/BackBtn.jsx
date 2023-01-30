import { View, StyleSheet, Pressable} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/colors';

export default function BackBtn() {
  return (
    <View style={styles.btnContainer}>
      <Pressable style={styles.btnInner} android_ripple={{color: '#aaa', borderless: true}}>
        <AntDesign name="arrowleft" size={24} color={Colors.primary} />
      </Pressable>
    </View>
  )
}

const styles= StyleSheet.create({
  btnContainer:{
    backgroundColor: 'white',
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  btnInner:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  }
})