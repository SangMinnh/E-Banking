import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./src/screens/Home/HomeStackScreen";
import NotiScreen from "./src/screens/NotiScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import {
  Ionicons,
  MaterialCommunityIcons,
  Fontisto,
  FontAwesome,
  SimpleLineIcons,
  AntDesign,
  FontAwesome5,
  Entypo,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "HomeStackScreen") {
              iconName = "home";
            } else if (route.name === "Notification") {
              iconName = "bell";
            } else if (route.name === "Settings") {
              iconName = "settings";
            }

            // You can return any component that you like here!
            return (
              <View
                style={{
                  backgroundColor: focused ? "rgba(0,152,194,0.7)" : "#fff",
                  padding: 12,
                  borderRadius: 15,
                }}
              >
                <Feather name={iconName} size={30} color={color} />
              </View>
            );
          },
        })}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: "#fff",
          inactiveTintColor: "#465C5B",
          style: { height: 70 },
        }}
      >
        <Tab.Screen name="HomeStackScreen" component={HomeStackScreen} />
        <Tab.Screen
          name="Notification"
          // options={{ tabBarBadge: 3 }}
          component={NotiScreen}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
