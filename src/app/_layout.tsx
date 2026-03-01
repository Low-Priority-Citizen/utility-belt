import { Stack } from "expo-router";
import "../../global.css";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function RootLayout() {
  return (
    <React.Fragment>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#111" },
          headerTintColor: "#fff",
          contentStyle: { backgroundColor: "000" },
        }}
      />
    </React.Fragment>
  );
}
