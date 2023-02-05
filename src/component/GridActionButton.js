import React from "react";
import { TouchableOpacity, Text } from "react-native";
import colors from "../constants";

export default function CustomButton({ onPress = () => {}, text }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        backgroundColor: colors.primary,
        height: 40,
        width: 100,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 3,
      }}
    >
      <Text style={{ color: colors.white }}>{text}</Text>
    </TouchableOpacity>
  );
}
