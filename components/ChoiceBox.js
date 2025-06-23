import { View, Text, Image } from "react-native";
import eatikanLogo from "../assets/eatikanLogo.png";
const ChoiceBox = ({ title, style }) => {
  return (
    <View style={[styles.box, style]}>
      <Image style={styles.choieImage} source={eatikanLogo} />
      <Text>{title}</Text>
    </View>
  );
};

const styles = {
  box: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#A2B29F",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  choieImage: {
    width: 72,
    height: 72,
    marginBottom: 4,
  },
};
export default ChoiceBox;
