import {useTheme} from "@react-navigation/native";
import {StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {LinearGradient} from "expo-linear-gradient";
import Paragraph from "../component/Paragraph";
import * as Animatable from "react-native-animatable";


const EmptyScreen = ({navigation}) => {
    const [data, setData] = React.useState({
        userName: '',
    });

    const textInputChange = (val) => {
        setData({
            ...data,
            userName: val
        });
    }

    const loginHandle = (userName) => {
        console.log(userName);
    }

    const {colors} = useTheme();
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#62cbb6' barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Hoş geldin!</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer, {
                    backgroundColor: colors.background
                }]}
            >
                <View style={styles.action}>
                    <FontAwesome
                        name="user"
                        color={colors.text}
                        size={35}
                        style={styles.icon}
                    />
                    <TextInput
                        placeholder="Kullanıcı Adı"
                        placeholderTextColor="#666666"
                        style={[styles.textInput, {
                            color: colors.text
                        }]}
                        onChangeText={(val) => textInputChange(val)}
                        keyboardType={'default'}
                    />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {
                            loginHandle(data.userName)
                        }}
                    >
                        <LinearGradient
                            colors={['#FEDF0A', '#5cccb5']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {
                                color: '#000'
                            }]}>Giriş Yap</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <Paragraph style={styles.paragraph}>
                        veya
                    </Paragraph>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('OtpScreen')}
                        style={[styles.signIn, {
                            borderColor: '#000000',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#000'
                        }]}>Kayıt Ol</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default EmptyScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(68,168,148)'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: 'rgb(0,0,0)',
        fontWeight: 'bold',
        fontSize: 34,
        alignSelf:"center",
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
        height: 50
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 40,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    icon: {
        position: 'absolute',
        left: 10,
        top: 7
    },
    paragraph: {
        marginTop: 15,
        fontSize: 17
    }
});