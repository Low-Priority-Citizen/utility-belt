import { StyleSheet, Text, View } from "react-native";
import useGroupify from "../../hooks/useGroupify";
import ModeSelector from "../../components/groupify/ModeSelector";
import TouchZone from "../../components/groupify/TouchZone";

export default function GroupifyScreen() {
  const {
    participants,
    mode,
    setMode,
    countdown,
    removeParticipant,
    addParticipant,
    updateParticipant,
    phase,
  } = useGroupify();

  return (
    <View style={styles.container}>
      <Text style={styles.counter}> Participants: {participants.length} </Text>
      <ModeSelector mode={mode} onChange={setMode} />
      {phase === "countdown" && (
        <Text style={styles.countdown}>{countdown}</Text>
      )}
      <TouchZone
        participants={participants}
        removeParticipant={removeParticipant}
        addParticipant={addParticipant}
        updateParticipant={updateParticipant}
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
  countdown: {
    position: "absolute",
    top: 100,
    alignSelf: "center",
    fontSize: 60,
    color: "white",
    zIndex: 10,
  },
});
