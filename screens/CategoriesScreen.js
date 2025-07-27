import { SafeAreaView, Text, ScrollView, View, Pressable } from "react-native";
import ChoiceBox from "../components/ChoiceBox"; // Assuming ChoiceBox takes a title prop
import OrderNowButton from "../components/OrderNowButton";
import categories from "../data/categories.json";

const CategoriesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.darkText}>Categories</Text>
      <ScrollView>
        <View style={styles.choicesRow}>
          {categories.map((cat) => (
            <Pressable
              key={cat.id}
              style={styles.choiceBox}
              onPress={() =>
                navigation.navigate("Items", { category: cat.name })
              }
            >
              <ChoiceBox title={cat.name} />
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <OrderNowButton />
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
    // alignItems: "center", // You might not want this if you want the content to stretch
    // justifyContent: "center", // You might not want this for scrollable content
    paddingBottom: 42, // Add padding to the bottom for spacing
  },
  darkText: {
    color: "#2F2F2F",
    fontSize: 36,
    textAlign: "center",
    fontWeight: "bold",
  },
  choicesRow: {
    width: "100%", // Ensure children can use percentage widths
    flexDirection: "row", // Arranges children in a row
    flexWrap: "wrap", // Wraps children to the next line when width is exceeded
    justifyContent: "space-between", // Distributes space to center items horizontally
    alignItems: "flex-start", // This will vertically align items within each row
    marginTop: 20,
    paddingHorizontal: 4, // Add horizontal padding for edge spacing
  },
  choiceBox: {
    width: "45%", // Reduce width for spacing
    marginBottom: 16,
    // Remove horizontal margin here, control spacing from parent
  },
};

export default CategoriesScreen;
