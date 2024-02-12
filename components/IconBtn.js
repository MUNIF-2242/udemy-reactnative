import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const IconBtn = ({ name, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}
    >
      <Ionicons name={name} size={24} color={color} />
    </Pressable>
  );
};

export default IconBtn;

const styles = StyleSheet.create({});
