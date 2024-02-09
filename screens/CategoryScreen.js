import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/data";
import CategoryGridTile from "../components/CategoryGridTile";

const renderCategoryItem = (itemData) => {
  return <CategoryGridTile title={itemData.item.title} />;
};

const CategoryScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
