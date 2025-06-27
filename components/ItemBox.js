import { View, Text } from "react-native";
import ChoiceBox from "./ChoiceBox";

const ItemBox = ({ title, pax, price }) => {
  return (
    <View style={styles.container}>
      <ChoiceBox title={title} noText={true} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>3-4pax</Text>
      <Text style={styles.price}>₱{price}</Text>
    </View>
  );
};
const styles = {
  container: {
    width: "45%",
    minHeight: 220, // Optional: ensures a minimum size for consistency
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android shadow
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
    textAlign: "center", // Ensures text is center-aligned and wraps
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    alignSelf: "flex-end", // Aligns the price to the right
  },
};
export default ItemBox;
