import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    padding: 6,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
});
