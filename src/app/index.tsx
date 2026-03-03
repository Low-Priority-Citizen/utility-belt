import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import PanelView from "../components/ui/PanelView";
import AppButton from "../components/ui/Button";
import { router, Stack } from "expo-router";
import Greeting from "../components/ui/Greeting";

const onPress = () => {
  router.push("./groupify");
};

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen
        options={{ headerBlurEffect: "light", headerBackTitle: "Utility Belt" }}
      />
      <Greeting />
      <PanelView
        title="Groupify"
        link="/groupify"
        imgSource={require("../../assets/groupify.png")}
      />
      <AppButton label="test" onPress={onPress} />
      <PanelView
        title="Calculator"
        link="/settings"
        imgSource={require("../../assets/groupify.png")}
      />
      <PanelView
        title="Guess that forehead"
        link="/groupify"
        imgSource={require("../../assets/groupify.png")}
      />
      <PanelView
        title="3"
        link="/groupify"
        imgSource={require("../../assets/groupify.png")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
