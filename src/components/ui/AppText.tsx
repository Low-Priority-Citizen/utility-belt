import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GroupifyScreen ( {children}: {children: React.ReactNode} ) {
  return (
      <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
})