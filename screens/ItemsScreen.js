import { SafeAreaView, Text } from "react-native";
import items from "../data/items.json"; // Assuming items.json contains your items data
const ItemsScreen = ({ route }) => {
  const { category } = route.params;
  const categoryItems = items[category] || [];
  return (
    <SafeAreaView>
      <Text>ItemsScreen {category}</Text>
      {categoryItems.map((item) => (
        <Text key={item.id}>
          {item.name} - ₱{item.price}
        </Text>
      ))}
    </SafeAreaView>
  );
};

export default ItemsScreen;
