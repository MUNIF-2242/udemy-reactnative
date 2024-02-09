import { StyleSheet } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: "#000" },
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="MealsCategoryScreen"
          component={CategoryScreen}
          options={{
            title: "All Categories",
          }}
        />
        <Stack.Screen
          name="MealsOverviewScreen"
          component={MealsOverviewScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
