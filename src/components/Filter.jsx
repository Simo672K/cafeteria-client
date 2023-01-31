import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';
import { useState } from 'react';

export default function Filter({name}) {
  const [isActive, setIsActive] = useState(false);

  const filterPressHandel= ()=>{
    setIsActive(prev=> !prev)
  }

  return (
    <View>
      <Pressable style={styles.filterContainer} onPress={filterPressHandel}>
        {
          isActive?
          <Ionicons name="checkmark-circle" size={24} color={Colors.filterActive} />
          :
          <Ionicons name="checkmark-circle-outline" size={24} color={Colors.filter} />
        }
        <Text style={{color: isActive? Colors.filterActive: Colors.filter, marginLeft: 2, fontSize: 16}}>{name}</Text>
      </Pressable>
    </View>
  )
}

const styles= StyleSheet.create({
  filterContainer:{
    flexDirection: 'row',
    alignItems:'center',
    marginHorizontal: 10
  }
})