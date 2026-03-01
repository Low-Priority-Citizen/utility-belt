import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Link href="/groupify" push asChild>
        <Pressable style={styles.card}>
          <ImageBackground
            source={require("../../assets/groupify.png")?? null}
            resizeMode="cover"
            style={styles.image}
            imageStyle={styles.imageBorder}
          >
            
            <Text style={styles.title}>Groupify</Text>
          </ImageBackground>
          <ImageBackground
            source={require("../../assets/groupify.png")?? null}
            resizeMode="cover"
            style={styles.image}
            imageStyle={styles.imageBorder}
          >
            <Text style={styles.title}>1</Text>
          </ImageBackground>
          <ImageBackground
            source={require("../../assets/groupify.png")?? null}
            resizeMode="cover"
            style={styles.image}
            imageStyle={styles.imageBorder}
          >
            <Text style={styles.title}>2</Text>
          </ImageBackground>
          <ImageBackground
            source={require("../../assets/groupify.png")?? null}
            resizeMode="cover"
            style={styles.image}
            imageStyle={styles.imageBorder}
          >
            <Text style={styles.title}>3</Text>
          </ImageBackground>
          <ImageBackground
            source={require("../../assets/groupify.png")?? null}
            resizeMode="cover"
            style={styles.image}
            imageStyle={styles.imageBorder}
          >
            <Text style={styles.title}>4</Text>
          </ImageBackground>
          <ImageBackground
            source={require("../../assets/groupify.png")?? null}
            resizeMode="cover"
            style={styles.image}
            imageStyle={styles.imageBorder}
          >
            <Text style={styles.title}>5</Text>
          </ImageBackground>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
  },
  card: {
    width: "90%",
    borderRadius: 20,
    gap: 30,
  },
  image: {
    paddingVertical: 80,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,
    overlayColor: ""
  },
  imageBorder: {
    borderRadius: 20,
  },
});
