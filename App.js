import { StyleSheet } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouritesScreen from "./screens/FavouritesScreen";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: "#000" },
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "#fff",
          drawerContentStyle: {
            backgroundColor: "#000",
          },
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "white",
          drawerActiveBackgroundColor: "tomato",
        }}
      >
        <Drawer.Screen
          name="CategoryScreen"
          component={CategoryScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="FavouritesScreen"
          component={FavouritesScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="star" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  };
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
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MealsOverviewScreen"
          component={MealsOverviewScreen}
        />
        <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
