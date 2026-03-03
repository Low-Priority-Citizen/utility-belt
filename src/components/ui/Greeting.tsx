import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { greetings } from "../../lib/data/greetings"

export default function Greeting() {
    const any = Math.floor(Math.random() * greetings.length);
  return (
    <View>
      <Text> { greetings[any].message } </Text>
    </View>
  )
}

const styles = StyleSheet.create({})