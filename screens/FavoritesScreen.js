// screens/FavoritesScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, Button, ImageBackground } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavoritesScreen = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem("favorites");
      setFavorites(storedFavorites ? JSON.parse(storedFavorites) : []);
    } catch (error) {
      Alert.alert("Error", "Could not load favorites");
      console.error("Error loading favorites:", error);
    }
  };

  const removeFromFavorites = async (id) => {
    try {
      const updatedFavorites = favorites.filter((launch) => launch.id !== id);
      setFavorites(updatedFavorites);
      await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      Alert.alert("Removed", "Launch removed from favorites.");
    } catch (error) {
      Alert.alert("Error", "Could not remove from favorites");
      console.error("Error removing favorite:", error);
    }
  };

  return (
    <ImageBackground source={require("../assets/img3.webp")} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Favorite Launches</Text>
        {favorites.length === 0 ? (
          <Text style={styles.emptyText}>No favorite launches added.</Text>
        ) : (
          <FlatList
            data={favorites}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <TouchableOpacity onPress={() => navigation.navigate("LaunchDetails", { launch: item })}>
                  <Text style={styles.missionName}>{item.name}</Text>
                  <Text style={styles.date}>{new Date(item.date_utc).toDateString()}</Text>
                </TouchableOpacity>
                <Button title="Remove" onPress={() => removeFromFavorites(item.id)} color="#ff3b30" />
              </View>
            )}
          />
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "rgba(0,0,0,0.6)" },
  backgroundImage: { flex: 1, resizeMode: "cover", justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "bold", color: "white", textAlign: "center", marginBottom: 10 },
  emptyText: { color: "gray", textAlign: "center", marginTop: 20 },
  item: { backgroundColor: "#1f1f1f", padding: 15, marginVertical: 5, borderRadius: 5, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  missionName: { color: "white", fontSize: 18, fontWeight: "bold" },
  date: { color: "gray", fontSize: 14 },
});

export default FavoritesScreen;