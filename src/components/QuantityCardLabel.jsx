import { StyleSheet, View, Text } from 'react-native'
import Colors from '../constants/colors'
import { Ionicons } from '@expo/vector-icons';

export default function QuantityCardLabel({title, subTitle}) {
  return (
    <View>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>{title}</Text>
        <Ionicons name="close-outline" size={24} color={Colors.primary} />
        <Text style={styles.subText}>{subTitle}</Text>
      </View> 
    </View>
  )
}

const styles= StyleSheet.create({
  mainTextContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  mainText:{
    color: Colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 18,
    marginRight: 8
  },
  subText:{
    color: Colors.secondary,
    fontSize: 12,
    position: 'absolute',
    bottom: -12
  },
})