import { Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { greetings } from "../../lib/data/greetings";

export default function GreetingsSection() {
  const params = useLocalSearchParams<{ id: string }>();
  const greeting = greetings.find((p) => p.id === params.id);
  return (
    <View>
      <Text>{greeting?.message}</Text>
    </View>
  );
}