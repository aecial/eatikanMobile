import {
  SafeAreaView,
  Text,
  ScrollView,
  View,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import { useState } from "react";
import items from "../data/items.json"; // Assuming items.json contains your items data
import ItemBox from "../components/ItemBox";
import OrderNowButton from "../components/OrderNowButton"; // Assuming you have an OrderNowButton component
const ItemsScreen = ({ route }) => {
  const { category } = route.params;
  const [searchQuery, setSearchQuery] = useState("");
  let categoryItems = [];
  if (category === "ALL") {
    categoryItems = Object.values(items).flat();
    if (searchQuery) {
      categoryItems = categoryItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  } else {
    categoryItems = items[category] || [];
  }

  // Modal state
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, paddingBottom: 20 }}>
        {category === "ALL" ? (
          <TextInput
            placeholder="Search items..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 8,
              padding: 12,
              marginBottom: 16,
            }}
          />
        ) : (
          ""
        )}
        <ScrollView
          contentContainerStyle={[
            styles.choicesRow,
            { paddingBottom: 24, flexGrow: 1 },
          ]}
        >
          {categoryItems.map((item) => (
            <ItemBox
              image={item.imgSrc}
              key={item.id}
              title={item.name}
              pax={item.pax}
              price={item.price}
              onPress={() => setSelectedItem(item)}
            />
          ))}
        </ScrollView>
        <OrderNowButton />
      </View>
      {/* Modal for enlarged item view */}
      <Modal
        visible={!!selectedItem}
        transparent
        animationType="fade"
        onRequestClose={() => setSelectedItem(null)}
      >
        <Pressable
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setSelectedItem(null)}
        >
          {selectedItem && (
            <View
              style={{
                width: "95%",
                backgroundColor: "transparent",
                borderRadius: 16,
                padding: 24,
                alignItems: "center",
              }}
            >
              <ItemBox
                image={selectedItem.imgSrc}
                title={selectedItem.name}
                pax={selectedItem.pax}
                price={selectedItem.price}
                enlarged
                noText={false}
              />
            </View>
          )}
        </Pressable>
      </Modal>
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
