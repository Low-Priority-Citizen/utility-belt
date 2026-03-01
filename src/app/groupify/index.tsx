import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GroupifyPage () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> GroupifyPage
      </Text>
      <View>
        <Text> This is a card</Text>
      </View>
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
  card: {
    backgroundColor: "#eeeeee",
    borderRadius: 50,
    boxShadow: '10px 10px rgba(0,0,0,0.1)'
  }
})