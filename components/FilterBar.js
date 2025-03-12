import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const FilterBar = ({ activeFilter, setFilter }) => {
  const filters = ["all", "past", "upcoming", "successful"];

  return (
    <View style={styles.container}>
      {filters.map((filter) => (
        <TouchableOpacity
          key={filter}
          style={[styles.button, activeFilter === filter && styles.activeButton]}
          onPress={() => setFilter(filter)}
        >
          <Text style={styles.text}>{filter.toUpperCase()}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-around", marginBottom: 10 },
  button: { padding: 10, borderRadius: 5, backgroundColor: "#444" },
  activeButton: { backgroundColor: "#ff5733" },
  text: { color: "#fff", fontWeight: "bold" },
});

export default FilterBar;
