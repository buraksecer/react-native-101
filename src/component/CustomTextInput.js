import { View, Text, TextInput } from "react-native";
import React from "react";
import colors from "../constants";

export default function CustomTextInput(props) {
  const { containerStyle, textInputStyle } = props;

  return (
    <View style={containerStyle}>
      <TextInput
        {...props}
        style={{
          borderColor: colors.gray,
          padding: 10,
          height: 50,
          width: "100%",
          borderWidth: 1,
          borderRadius: 10,
        }}
      />
    </View>
  );
}
