import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

const MealItem = (props) => {
  const { id, title, imageUrl, duration, complexity, affordability } = props;
  const navigation = useNavigation();
  const selectMealItemHandler = () => {
    navigation.navigate("MealDetailScreen", {
      mealId: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        onPress={selectMealItemHandler}
      >
        <View>
          <Image
            style={styles.image}
            source={{
              uri: imageUrl,
            }}
          />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
    marginVertical: 16,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: "white",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },
});
