import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";

const FocusAwareStatusBar = (props) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
};

export default FocusAwareStatusBar;

const styles = StyleSheet.create({});
