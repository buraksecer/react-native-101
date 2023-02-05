import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Keyboard,
    StyleSheet,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Paragraph from '../component/Paragraph';

import {useTheme} from 'react-native-paper';

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        phoneNumber: '',
    });

    const {colors} = useTheme();

    const textInputChange = (val) => {
        setData({
            ...data,
            phoneNumber: val
        });
    }

    const loginHandle = (phoneNumber) => {
        console.log(phoneNumber);
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#FEDF0A' barStyle="light-content"/>
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
                        name="mobile"
                        color={colors.text}
                        size={35}
                        style={styles.icon}
                    />
                    <TextInput
                        placeholder="Cep Telefonu (5XXXXXXXXX)"
                        placeholderTextColor="#666666"
                        style={[styles.textInput, {
                            color: colors.text
                        }]}
                        onChangeText={(val) => textInputChange(val)}
                        keyboardType={'phone-pad'}
                    />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {
                            loginHandle(data.phoneNumber)
                        }}
                    >
                        <LinearGradient
                            colors={['#FEDF0A', '#FEDF0A']}
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
                            borderColor: '#FEDF0A',
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

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEDF0A'
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
        color: '#000',
        fontWeight: 'bold',
        fontSize: 34
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