import React from 'react';
import {Text} from 'react-native';
import {useFonts, EncodeSansExpanded_400Regular} from '@expo-google-fonts/encode-sans-expanded';
import AppLoading from "expo-app-loading";

export default function Paragraph(props) {
    let [fontsLoaded] = useFonts({
        EncodeSansExpanded_400Regular: EncodeSansExpanded_400Regular
    })

    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    return <Text
        style={{
            fontSize: 15,
            lineHeight: 21,
            textAlign: 'center',
            marginBottom: 12,
            fontFamily: "EncodeSansExpanded_400Regular",
            ...props.styles
        }}
        {...props}
    />
}