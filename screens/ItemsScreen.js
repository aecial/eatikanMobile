import { SafeAreaView, Text, ScrollView, View } from "react-native";
import items from "../data/items.json"; // Assuming items.json contains your items data
import ItemBox from "../components/ItemBox";
import OrderNowButton from "../components/OrderNowButton"; // Assuming you have an OrderNowButton component
const ItemsScreen = ({ route }) => {
  const { category } = route.params;
  const categoryItems = items[category] || [];
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, paddingBottom: 20 }}>
        <ScrollView
          contentContainerStyle={[
            styles.choicesRow,
            { paddingBottom: 24, flexGrow: 1 },
          ]} // Add paddingBottom and flexGrow
        >
          {categoryItems.map((item) => (
            <ItemBox
              key={item.id}
              title={item.name}
              pax={item.pax}
              price={item.price}
            />
          ))}
        </ScrollView>
        <OrderNowButton />
      </View>
    </SafeAreaView>
  );
};
const styles = {
  choicesRow: {
    width: "100%", // Ensure children can use percentage widths
    flexDirection: "row", // Arranges children in a row
    flexWrap: "wrap", // Wraps children to the next line when width is exceeded
    justifyContent: "space-between", // Distributes space to center items horizontally
    alignItems: "flex-start", // This will vertically align items within each row
    marginTop: 20,
    paddingHorizontal: 4,
    gap: 16,
    // Add horizontal padding for edge spacing
    marginBottom: 24, // Add bottom margin for spacing from the OrderNowButton
  },
  container: {
    flex: 1,
    padding: 20,
    // alignItems: "center", // You might not want this if you want the content to stretch
    // justifyContent: "center", // You might not want this for scrollable content
  },
};
export default ItemsScreen;
