import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryGridTile = ({ title, color }) => {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable android_ripple={{ color: "#ccc" }} style={styles.button}>
        <View style={styles.innerContainer}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    height: 150,
  },
  button: { flex: 1 },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
