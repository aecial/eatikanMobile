import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderNowButton from "./components/OrderNowButton";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={require("./screens/HomeScreen").default}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu"
          component={require("./screens/CategoriesScreen").default}
        />
        <Stack.Screen
          name="Items"
          component={require("./screens/ItemsScreen").default}
          options={({ route }) => ({
            title: `${route.params.category}`,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
