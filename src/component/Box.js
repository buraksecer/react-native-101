import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Layout from "../constants/Layout";

export default function Box({ text, iconName, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 0.4,
          width: Layout.width * 0.45,
          height: Layout.height * 0.18,
          borderRadius: 10,
          borderColor: "gray",
          marginRight: 10,
          paddingHorizontal: 20,
        }}>
        <Ionicons name={iconName} size={45} />

        <Text
          style={{
            marginTop: 5,
            fontWeight: "bold",
            fontSize: 20,
            textAlign: "center",
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
