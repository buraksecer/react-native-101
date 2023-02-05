import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../constants";
import { useFonts, EncodeSansExpanded_400Regular } from '@expo-google-fonts/encode-sans-expanded';
import AppLoading from "expo-app-loading";

export default function CustomButton({ text, onPress = () => {}, styles, textStyles }) {

    let [fontsLoaded] = useFonts({
        EncodeSansExpanded_400Regular: EncodeSansExpanded_400Regular
    })

    if (!fontsLoaded) {
        return <AppLoading/>;
    }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        backgroundColor: colors.primary,
        height: 50,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        ...styles
      }}
    >
      <Text
        style={{
          color: colors.white,
          textAlign: "center",
          fontWeight: '600',
          // fontFamily: "EncodeSansExpanded_400Regular",
          fontSize: 15,
          ...textStyles
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
