import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealsOverviewScreen = ({ route }) => {
  const catId = route.params.categoryId;
  return (
    <View>
      <Text>MealsOverviewScreen -{catId}</Text>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({});
