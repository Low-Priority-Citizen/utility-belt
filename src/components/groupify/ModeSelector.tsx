import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { GroupifyMode } from "../../types/groupifyMode";

export default function ModeSelector() {
  const [mode, setMode] = useState<GroupifyMode>("split-2");
  return (
    <Picker
      selectedValue={mode}
      onValueChange={(itemValue) => setMode(itemValue)}
    >
      <Picker.Item label="Random 1" value="random-1" />
      <Picker.Item label="Random 2" value="random-2" />
      <Picker.Item label="Random 3" value="random-3" />
      <Picker.Item label="Random 4" value="random-4" />
      <Picker.Item label="Random 5" value="random-5" />
      <Picker.Item label="Random 6" value="random-6" />
      <Picker.Item label="Split 2" value="split-2" />
      <Picker.Item label="Split 3" value="split-3" />
      <Picker.Item label="Split 4" value="split-4" />
    </Picker>
  );
}

const styles = StyleSheet.create({});
