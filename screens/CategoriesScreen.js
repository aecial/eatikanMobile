import { SafeAreaView, Text, ScrollView, View } from "react-native";
import ChoiceBox from "../components/ChoiceBox"; // Assuming ChoiceBox takes a title prop

const CategoriesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.darkText}>Categories</Text>
      <ScrollView>
        <View style={styles.choicesRow}>
          <ChoiceBox style={styles.choiceBox} title="ITIK" />
          <ChoiceBox style={styles.choiceBox} title="PORK" />
          <ChoiceBox style={styles.choiceBox} title="SALMON" />
          <ChoiceBox style={styles.choiceBox} title="BEEF" />
          <ChoiceBox style={styles.choiceBox} title="SEAFOODS" />
          <ChoiceBox style={styles.choiceBox} title="CHICKEN" />
          <ChoiceBox style={styles.choiceBox} title="VEGETABLE" />
          {/* Add more <ChoiceBox /> as needed */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
    // alignItems: "center", // You might not want this if you want the content to stretch
    // justifyContent: "center", // You might not want this for scrollable content
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
