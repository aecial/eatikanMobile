import { SafeAreaView, Text } from "react-native";

const ItemsScreen = ({ route }) => {
  const { category } = route.params;
  return (
    <SafeAreaView>
      <Text>ItemsScreen {category}</Text>
    </SafeAreaView>
  );
};

export default ItemsScreen;
