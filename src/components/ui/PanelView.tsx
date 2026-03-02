import { Pressable, ImageBackground, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

interface PanelViewProps {
  title: string;
  link: string;
  imgSource: number;
}

export default function PanelView({ title, link, imgSource }: PanelViewProps) {
  return (
    <Link href={link} push asChild>
      <Pressable style={styles.card}>
        <ImageBackground
          source={imgSource}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.imageBorder}
        >
          <Text style={styles.title}>{title}</Text>
        </ImageBackground>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
  },
  card: {
    width: "90%",
    borderRadius: 20,
    paddingBottom: 30,
  },
  image: {
    paddingVertical: 80,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,
  },
  imageBorder: {
    borderRadius: 20,
  },
});
