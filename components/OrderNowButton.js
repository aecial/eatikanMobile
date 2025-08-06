import {
  Pressable,
  Text,
  StyleSheet,
  Platform,
  Alert,
  Linking,
} from "react-native";
import * as IntentLauncher from "expo-intent-launcher";
const OpenNowButton = () => {
  const phoneNumber = "+639338102774";

  const makeCall = async () => {
    if (Platform.OS === "android") {
      try {
        IntentLauncher.startActivityAsync("android.intent.action.DIAL", {
          data: `tel:${phoneNumber}`,
        });
      } catch (error) {
        Alert.alert("Error launching dialer", error.message);
      }
    } else if (Platform.OS === "ios") {
      const url = `telprompt:${phoneNumber}`;
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        Linking.openURL(url).catch((err) =>
          Alert.alert("Error", `${err.message}`)
        );
      } else {
        Alert.alert(
          "Can't make a call",
          "This device doesn't support phone links."
        );
      }
    } else {
      Alert.alert("Unsupported Platform");
    }
  };

  return (
    <Pressable onPress={makeCall} style={styles.primaryButton}>
      <Text style={styles.whiteText}>📞 Order Now</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  whiteText: {
    color: "#FFF",
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
