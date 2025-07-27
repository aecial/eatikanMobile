import React from "react";
import { Pressable, Text, Linking, StyleSheet } from "react-native";

const OpenNowButton = () => {
  const phoneNumber = "+639338102774";

  const makeCall = async () => {
    const url = `tel:${phoneNumber}`;
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      alert("Can't make a call.");
    }
  };

  return (
    <Pressable onPress={makeCall} style={styles.primaryButton}>
      <Text style={styles.whiteText}>📞 Order Now</Text>
    </Pressable>
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
});
export default OpenNowButton;
