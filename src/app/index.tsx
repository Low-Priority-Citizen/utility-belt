import { StyleSheet, View } from "react-native";
import React from "react";
import PanelView from "../components/ui/PanelView";
import AppButton from "../components/ui/Button";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <PanelView
        title="Groupify"
        link="/groupify"
        imgSource={require("../../assets/groupify.png")}
      />
      {/* <AppButton /> */}
      <PanelView
        title="1"
        link="/groupify"
        imgSource={require("../../assets/groupify.png")}
      />
      <PanelView
        title="2"
        link="/groupify"
        imgSource={require("../../assets/groupify.png")}
      />
      <PanelView
        title="3"
        link="/groupify"
        imgSource={require("../../assets/groupify.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 30,
    gap: 20,
  },
});
