import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
    const {colors} = useTheme();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#FEDF0A' barStyle="light-content"/>
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../../assets/taxisst-logo-transparent.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <Animatable.View
                style={[styles.footer, {
                    backgroundColor: colors.background
                }]}
                animation="fadeInUpBig"
            >
                <Text style={[styles.title, {
                    color: colors.text
                }]}>Taksi ücretini paylaş!</Text>
                <Text style={styles.text}>Hemen sende kazanlı çıkabilirsin</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                        <LinearGradient
                            colors={['#FEDF0A', '#FEDF0A']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>BAŞLA</Text>
                            <MaterialIcons
                                name="navigate-next"
                                color="#000"
                                size={20}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.18;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEDF0A'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 0.7,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 40,
        fontWeight: 'bold',
        width: 300
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
    },
    textSign: {
        color: 'black',
        fontWeight: 'bold',
    }
});