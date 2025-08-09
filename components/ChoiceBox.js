import { View, Text } from "react-native";
import { Image } from "expo-image";
import eatikanLogo from "../assets/eatikanLogo.png";
const ChoiceBox = ({ title, style, noText, image, enlarged }) => {
  return (
    <View style={[styles.box, style]}>
      <Image
        style={[styles.choieImage, enlarged && styles.enlargedImage]}
        source={image ? { uri: image } : eatikanLogo}
      />
      {!noText && <Text style={{ fontWeight: "bold" }}>{title}</Text>}
    </View>
  );
};

const styles = {
  box: {
    padding: 2,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#A2B29F",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    elevation: 2,
  },
  choieImage: {
    width: "100%",
    height: 80,
    contentFit: "cover",
    borderRadius: 8, // Optional, for rounded corners
  },
  enlargedImage: {
    height: 180, // Larger height for enlarged modal view
  },
};
export default ChoiceBox;
