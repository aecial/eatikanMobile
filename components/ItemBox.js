import { View, Text, Pressable } from "react-native";
import ChoiceBox from "./ChoiceBox";
import OrderNowButton from "./OrderNowButton";
const ItemBox = ({ title, pax, price, image, onPress, enlarged, noText }) => {
  const Container = onPress ? Pressable : View;
  return (
    <Container
      onPress={onPress}
      style={[styles.container, enlarged && styles.enlarged]}
    >
      <ChoiceBox
        title={title}
        noText={true}
        image={image}
        enlarged={enlarged}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{pax} pax</Text>
      <Text style={styles.price}>₱{price}</Text>
      {onPress ? "" : <OrderNowButton />}
    </Container>
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
  enlarged: {
    width: "100%",
    minHeight: 350,
    marginBottom: 0,
    padding: 20,
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
