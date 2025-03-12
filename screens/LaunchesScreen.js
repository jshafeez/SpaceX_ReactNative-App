// LaunchesScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet, ActivityIndicator, ImageBackground } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";

const LaunchesScreen = ({ navigation }) => {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchLaunches();
  }, []);

  const fetchLaunches = async () => {
    try {
      const response = await fetch("https://api.spacexdata.com/v4/launches");
      const data = await response.json();
      setLaunches(data);
    } catch (error) {
      console.error("Error fetching launches:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterLaunches = () => {
    if (filter === "all") return launches;
    if (filter === "upcoming") return launches.filter((launch) => launch.upcoming);
    if (filter === "past") return launches.filter((launch) => !launch.upcoming);
    if (filter === "successful") return launches.filter((launch) => launch.success);
    if (filter === "failed") return launches.filter((launch) => launch.success === false);
  };

  return (
    <ImageBackground source={require("../assets/img1.webp")} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>SpaceX Launches</Text>
        <Button title="View Favorites" onPress={() => navigation.navigate("Favorites")} />
        <Picker
          selectedValue={filter}
          onValueChange={(itemValue) => setFilter(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="All Launches" value="all" />
          <Picker.Item label="Upcoming Launches" value="upcoming" />
          <Picker.Item label="Past Launches" value="past" />
          <Picker.Item label="Successful Launches" value="successful" />
          <Picker.Item label="Failed Launches" value="failed" />
        </Picker>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <FlatList
            data={filterLaunches()}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.item} 
                onPress={() => navigation.navigate("LaunchDetails", { launch: item })}
              >
                <Text style={styles.missionName}>{item.name}</Text>
                <Text style={styles.date}>{new Date(item.date_utc).toDateString()}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: "cover" },
  container: { flex: 1, padding: 20, backgroundColor: "rgba(13, 12, 12, 0.7)" },
  title: { fontSize: 22, fontWeight: "bold", color: "white", textAlign: "center", marginBottom: 10 },
  picker: { backgroundColor: "#333", color: "white", marginVertical: 10 },
  item: { backgroundColor: "#1f1f1f", padding: 15, marginVertical: 5, borderRadius: 5 },
  missionName: { color: "white", fontSize: 18, fontWeight: "bold" },
  date: { color: "gray", fontSize: 14 },
});

export default LaunchesScreen;
