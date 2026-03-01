import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text> This is a card</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    marginVertical: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  card: {
    // flex: 1,
    // flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#eeeeee",
    borderRadius: 5,
    boxShadow: '4px 4px rgba(0,0,0,0.1)',
    paddingHorizontal: 120,
    paddingVertical: 60,
  }
});
