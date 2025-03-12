// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LaunchesScreen from "./screens/LaunchesScreen";
import LaunchDetailsScreen from "./screens/LaunchDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen"; // Add Favorites Screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerStyle: { backgroundColor: '#000' },  // Updated color
        headerTintColor: '#fff',
        cardStyle: { backgroundColor: '#000' }
      }}>
        <Stack.Screen 
          name="Launches" 
          component={LaunchesScreen} 
          options={{ title: "SpaceX" }}
        />
        <Stack.Screen 
          name="LaunchDetails" 
          component={LaunchDetailsScreen} 
          options={{ title: "Launch Details" }}
        />
        <Stack.Screen 
          name="Favorites" 
          component={FavoritesScreen} 
          options={{ title: "Favorites" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
