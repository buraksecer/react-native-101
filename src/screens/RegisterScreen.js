import React, {useEffect, useMemo, useState} from "react";
import {View, Text} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomTextInput from "../component/CustomTextInput";
import CustomButton from "../component/CustomButton";
import Back from "../component/Back";
import * as Localization from 'expo-localization';

export default function RegisterScreen({navigation}) {
    console.log(Localization.region);
    return (
        <SafeAreaView>
            <Back navigation={navigation} />
            <CustomTextInput
                containerStyle={{marginVertical: 10, width: "100%"}}
                placeholder={"Cep Telefonu (5XXXXXXXXX)"}
            />
            <CustomTextInput
                containerStyle={{marginVertical: 10, width: "100%"}}
                placeholder={"İsim"}
            />
            <CustomTextInput
                containerStyle={{marginVertical: 10, width: "100%"}}
                placeholder={"Soyisim"}
            />
            <CustomTextInput
                containerStyle={{marginVertical: 10, width: "100%"}}
                placeholder={"Cinsiyet"}
            />
            <CustomButton
                text="Kayıt Ol"
            />
        </SafeAreaView>
    );
}