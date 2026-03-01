import { Pressable, Text, StyleSheet } from "react-native";

interface AppButtonProps {
  label: string;
  onPress: () => void;
}

export default function AppButton({ label, onPress }: AppButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 20,
    paddingHorizontal: 50,
    backgroundColor: "#111",
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 800,
  },
});
