import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import { Image } from "react-native";
import eatikanLogo from "../assets/eatikanLogo.png";
import OpenMapButton from "../components/OpenMapButton";
import OrderNowButton from "../components/OrderNowButton";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.heroLogo} source={eatikanLogo} />
      <OpenMapButton />
      <Pressable
        style={styles.secondaryButton}
        onPress={() => navigation.navigate("Menu")}
      >
        <Text style={styles.darkText}>Menu</Text>
      </Pressable>
      <OrderNowButton />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  whiteText: {
    color: "#FFF",
    fontSize: 24,
    textAlign: "center",
  },
  darkText: {
    color: "#2F2F2F",
    fontSize: 24,
    textAlign: "center",
  },
  primaryButton: {
    fontSize: 24,
    backgroundColor: "#2F2F2F",
    color: "#FFF",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    marginBottom: 10,
  },
  secondaryButton: {
    fontSize: 24,
    borderWidth: 1,
    borderColor: "#2F2F2F",
    color: "#2F2F2F",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    marginBottom: 10,
  },
  heroLogo: {
    width: 400,
    height: 400,
    alignSelf: "center",
    marginBottom: 20,
  },
});

export default HomeScreen;
