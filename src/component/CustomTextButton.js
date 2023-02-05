import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../constants";

export default function CustomButton({
  text,
  onPress = () => {},
  containerStyle,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        height: 50,
        width: "100%",
        borderRadius: 10,
        ...containerStyle,
      }}>
      <Text
        style={{
          color: colors.primary,
          fontSize: 12,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
