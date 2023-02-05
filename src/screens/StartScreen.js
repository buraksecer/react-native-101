import React, {useEffect, useState, useRef} from "react";
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {tryCatch} from "@thalesrc/js-utils";

import Background from '../component/Background';
import Paragraph from '../component/Paragraph';
import CustomButton from "../component/CustomButton";
import CustomTextInput from "../component/CustomTextInput";

import ScreenName from "../constants/ScreenName";
import {Get} from "../services";

export default function StartScreen({navigation}) {
    const [data, setData] = useState(null);
    const lottieViewRef = useRef(null);

    async function GetTry() {
        const [, testResponse] = await tryCatch(Get());
        setData(testResponse)
    }

    useEffect(() => {
        lottieViewRef.current?.play();
    },);

    useEffect(() => {
        GetTry();
    }, []);

    return (
        <Background>
            <View
                style={{
                    transform: [{scaleX: -1}],
                    marginTop: -50
                }}>
                <LottieView
                    source={require('../../assets/lottie/taxi.json')}
                    ref={lottieViewRef}
                    onLayout={() => {
                        lottieViewRef.current?.play()
                    }}
                    loop
                    style={{
                        width: 400,
                        height: 350,
                    }}
                    resizeMode={"cover"}
                />
            </View>
            <Paragraph styles={styles.text}>
                Ulaşacağın her yere...
            </Paragraph>
            <CustomTextInput
                containerStyle={{marginVertical: 10, width: "100%"}}
                placeholder={"Cep Telefonu (5XXXXXXXXX)"}
            />
            <CustomButton
                text="GİRİŞ YAP"
                styles={styles.loginButton}
                textStyles={styles.loginText}
            />
            <Paragraph>
                veya
            </Paragraph>
            <CustomButton
                text="KAYIT OL"
                styles={styles.registerButton}
                textStyles={styles.registerText}
                onPress={() => navigation.navigate(ScreenName.RegisterScreen.toString())}
            />
        </Background>
    )
}

const styles = StyleSheet.create({
    loginButton: {
        marginBottom: 15,
        backgroundColor: '#FEDF0A',
        borderRadius: 16
    },
    registerButton: {
        backgroundColor: 'rgba(0,0,0,0)',
        borderWidth: 2,
        borderRadius: 16,
        borderColor: '#FEDF0A'
    },
    registerText: {
        color: '#000000'
    },
    loginText: {
        color: '#000000'
    },
    text: {
        marginTop: -20,
        marginBottom: 15,
        fontSize: 14,
    },
    image: {
        position: 'absolute',
        top: -1,
        right: -1,
        width: 100,
        height: 100,
        borderRadius: 16
    }
})