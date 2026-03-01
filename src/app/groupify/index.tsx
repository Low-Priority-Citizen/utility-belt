import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GroupifyScreen () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Groupify </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
})