import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Participant } from "../../types/groupify";

export default function TouchZone({
    participants,
    addParticipant,
    removeParticipant,
} : {
    participants: Participant[],
    addParticipant: () => [],
    removeParticipant: () => [],
}) {
  return (
    <View>
      <Text>TouchZone</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
