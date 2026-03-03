import { StyleSheet, Text, View } from "react-native";
import useGroupify from "../../hooks/useGroupify";
import ModeSelector from "../../components/groupify/ModeSelector";

export default function GroupifyScreen() {
  const { participants, mode, setMode, result } = useGroupify();
  
  return (
    <View style={styles.container}>
      <Text style={styles.counter}> Participants: {participants.length} </Text>
      <ModeSelector mode={mode} onChange={setMode}/>
      <Text style={styles.counter}> Selected: {result.length} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  counter: {
    fontSize: 20,
  },
});
