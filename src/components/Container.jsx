import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

export default function Container({children}) {
  return (
    <SafeAreaView style={styles.container}>{children}</SafeAreaView>
  )
}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 24,
  },
})