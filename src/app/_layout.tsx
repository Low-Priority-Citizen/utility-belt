import { Stack } from "expo-router";
import "../../global.css";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#111" },
          headerTintColor: "#fff",
          contentStyle: { backgroundColor: "#fff" },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      />
    </GestureHandlerRootView>
  );
}
