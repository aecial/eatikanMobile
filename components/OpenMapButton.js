import React from "react";
import { Pressable, Text, Linking, StyleSheet } from "react-native";

const OpenMapButton = () => {
  const mapUrl = "https://maps.app.goo.gl/94WmeEwUb2uHCXaE7";

  const openMap = async () => {
    const supported = await Linking.canOpenURL(mapUrl);
    if (supported) {
      await Linking.openURL(mapUrl);
    } else {
      alert("Can't open map.");
    }
  };

  return (
    <Pressable onPress={openMap} style={styles.secondaryButton}>
      <Text style={styles.darkText}>Location</Text>
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
export default OpenMapButton;
