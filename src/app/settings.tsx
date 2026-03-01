import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Link href="/groupify" push asChild>
        <Pressable>
          <View style={styles.card}>
            <Text> This is the 2nd card</Text>
          </View>
        </Pressable>
      </Link>
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
    borderRadius: 20,
    boxShadow: "4px 4px rgba(0,0,0,0.1)",
    paddingHorizontal: 120,
    paddingVertical: 80,
  },
});
