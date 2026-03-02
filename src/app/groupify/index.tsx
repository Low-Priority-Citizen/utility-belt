import { StyleSheet, Text, View } from 'react-native';
import useGroupify from "../../hooks/useGroupify";
import ModeSelector from '../../components/groupify/ModeSelector';

export default function GroupifyScreen () {
  const { participants } = useGroupify();
  return (
    <View style={styles.container}>
      <Text style={styles.counter}> Participants: {participants.length} </Text>
      <ModeSelector />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  counter: {
    fontSize: 20,
  },
})