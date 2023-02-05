import { StyleSheet ,View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import CounterBtn from './CounterBtn';
import Colors from '../constants/colors';

export default function QuantityCounter({quantity, setQuantity}) {

  const addHandler= ()=>{
    setQuantity(prev=> prev+1)
  }
  const subsHandler= ()=>{
    if (quantity === 1) return
    setQuantity(prev=> prev-1)
  }

  return (
    <View style={styles.counterContainer}>
      <CounterBtn onPress={subsHandler}>
        <Ionicons name="remove-outline" size={24} color="white" />
      </CounterBtn>
      <View style={styles.counterDisplay}>
        <Text style={{fontSize: 16}}>{quantity}</Text>
      </View>
      <CounterBtn onPress={addHandler}>
        <Ionicons name="add-outline" size={24} color="white" />
      </CounterBtn>
    </View>
  )
}

const styles= StyleSheet.create({
  counterContainer:{
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
    width: 130
  },
  counterDisplay:{
    paddingVertical: 8,
    flex: 1,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: Colors.primary,
    justifyContent:'center',
    alignItems:'center',
    textAlign: 'center',
  }
})
