import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { MEALS } from "../data/data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconBtn from "../components/IconBtn";
import { FavouritesContext } from "../store/context/favorites-context";

const MealDetailScreen = ({ route, navigation }) => {
  const favouriteMealsCtx = useContext(FavouritesContext);

  const mealId = route.params.mealId;

  const mealIsFavourite = favouriteMealsCtx.ids.includes(mealId);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const changeFavouriteMealStatusHandler = () => {
    if (mealIsFavourite) {
      favouriteMealsCtx.removeFavourite(mealId);
    } else {
      favouriteMealsCtx.addFovourite(mealId);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconBtn
            name={mealIsFavourite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavouriteMealStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavouriteMealStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.textStyle}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>

          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>

          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: { marginBottom: 32 },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "white",
  },
  textStyle: { color: "white" },
  listOuterContainer: { alignItems: "center" },
  listContainer: {
    maxWidth: "80%",
  },
});
