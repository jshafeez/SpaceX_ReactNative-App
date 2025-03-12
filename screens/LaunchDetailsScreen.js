// LaunchDetailsScreen.js
import React, { useState } from "react";
import { View, Text, Image, Button, StyleSheet, ImageBackground, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LaunchDetailsScreen = ({ route, navigation }) => {
  const { launch } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  const addToFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem("favorites");
      const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
      const updatedFavorites = [...favorites, launch];
      await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(true);
      Alert.alert("Success", "Launch added to favorites!");
    } catch (error) {
      Alert.alert("Error", "Error saving to favorites");
    }
  };

  return (
    <ImageBackground source={require("../assets/img2.webp")} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>{launch.name}</Text>
        <Text style={styles.date}>{new Date(launch.date_utc).toDateString()}</Text>
        <Image source={{ uri: launch.links.patch.small }} style={styles.image} />
        <Text style={styles.detail}>Rocket: {launch.rocket}</Text>
        <Text style={styles.detail}>Launch Site: {launch.launchpad}</Text>
        <Text style={styles.detail}>Success: {launch.success ? "Yes" : "No"}</Text>
        <Text style={styles.detail}>Details: {launch.details || "No details available."}</Text>
        <Button title="Add to Favorites" onPress={addToFavorites} disabled={isFavorite} />
        <View style={{ height: 10 }} />
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: "cover" },
  container: { flex: 1, padding: 20, backgroundColor: "rgba(0, 0, 0, 0.7)" },
  title: { fontSize: 24, fontWeight: "bold", color: "white", textAlign: "center", marginBottom: 10 },
  date: { fontSize: 18, color: "lightgray", textAlign: "center", marginBottom: 10 },
  image: { width: 100, height: 100, alignSelf: "center", marginBottom: 10 },
  detail: { fontSize: 16, color: "white", marginBottom: 5 },
});

export default LaunchDetailsScreen;
