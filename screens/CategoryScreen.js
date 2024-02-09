import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoryScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const onPressHandler = () => {
      navigation.navigate("MealsOverviewScreen", {
        categoryId: itemData.item.id,
      });
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
