import { StyleSheet, Text, View } from "react-native";
import useGroupify from "../../hooks/useGroupify";
import ModeSelector from "../../components/groupify/ModeSelector";
import TouchZone from "../../components/groupify/TouchZone";
import { Stack } from "expo-router";

export default function GroupifyScreen() {
  const { participants, mode, setMode, result, removeParticipant, addParticipant } = useGroupify();

  return (
    <View style={styles.container}>
      <Text style={styles.counter}> Participants: {participants.length} </Text>
      <ModeSelector mode={mode} onChange={setMode} />
      <TouchZone
        participants={participants}
        removeParticipant={removeParticipant}
        addParticipant={addParticipant}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  counter: {
    fontSize: 20,
  },
});
