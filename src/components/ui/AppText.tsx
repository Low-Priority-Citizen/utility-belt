import { StyleSheet, Text } from 'react-native'
import React from 'react'

export default function GroupifyScreen ( {children}: {children: React.ReactNode} ) {
  return (
    <Text style={styles.label}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    fontVariant: ["small-caps"],
  },
})