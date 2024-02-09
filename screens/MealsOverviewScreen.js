import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route }) => {
  const catId = route.params.categoryId;

  const disPlayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  const renderMealItem = (itemData) => {
    return <MealItem title={itemData.item.title} />;
  };
  return (
    <View>
      <Text>
        <FlatList
          data={disPlayedMeals}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={renderMealItem}
        />
      </Text>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({});
