import { View, StyleSheet } from 'react-native'
import QRCode from 'react-native-qrcode-svg'

export default function QRCodeDisplay() {
  return (
    <View style={styles.qrcodeContainer}>
      <QRCode size={200} value='order_id=a7b0c1a6eda74eca9dacc63ffcbc5a4d' />
    </View>
  )
}

const styles= StyleSheet.create({
  qrcodeContainer:{
    backgroundColor: 'white',
    padding: 20,
    marginTop: 50,
    marginBottom: 25,
  }
})