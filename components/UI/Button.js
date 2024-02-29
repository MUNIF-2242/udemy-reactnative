import { Pressable, StyleSheet, View, Text } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

const Button = ({ children, mode, onPress, style }) => {
  return (
    <View style={style}>
      <Pressable onPress={onPress}>
        <View style={[styles.button, mode == "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode == "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: GlobalStyles.colors.primary200,
    padding: 8,
    borderRadius: 4,
  },
  flat: { backgroundColor: "transparent" },
  buttonText: { textAlign: "center", color: GlobalStyles.colors.gray500 },
  flatText: { color: GlobalStyles.colors.accent500 },
});
