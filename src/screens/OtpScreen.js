import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import {useTheme} from 'react-native-paper';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

export default function OtpScreen({ navigation }) {
    const CELL_COUNT = 6;
    const {colors} = useTheme();
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const otpHandler = (phoneNumber) => {
        console.log(phoneNumber);
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#62cbb6' barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Kodunuzu Girin</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer, {
                    backgroundColor: colors.background
                }]}
            >
                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFiledRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    autoFocus
                    renderCell={({index, symbol, isFocused}) => (
                        <View
                            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                            onLayout={getCellOnLayoutHandler(index)}
                            key={index}
                            style={[styles.cellRoot, isFocused && styles.focusCell]}>
                            <Text style={styles.cellText}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        </View>
                    )}
                />
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {
                            otpHandler(data.phoneNumber)
                        }}
                    >
                        <LinearGradient
                            colors={['#FEDF0A', '#5cccb5']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.tryOtp, {
                                color: '#000'
                            }]}>Gönder</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#44A894FF'
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
    tryOtp: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    root: {
        padding: 20,
        minHeight: 300,
    },
    title: {
        textAlign: 'center',
        fontSize: 30
    },
    codeFiledRoot: {
        marginTop: 20,
        // width: 280,
        // marginLeft: 'auto',
        marginRight: 'auto',
        marginLeft: 5
    },
    cellRoot: {
        width: 55,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        margin: 5,
        marginRight: 0
    },
    cellText: {
        color: '#000',
        fontSize: 36,
        textAlign: 'center',
    },
    focusCell: {
        borderBottomColor: 'rgb(103,132,169)',
        borderBottomWidth: 2,
    },
})