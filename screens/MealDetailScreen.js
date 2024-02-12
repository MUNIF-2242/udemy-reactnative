import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;
  console.log(mealId);
  return (
    <View>
      <Text style={{ color: "white" }}>MealDetailScreen - {mealId}</Text>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({});
