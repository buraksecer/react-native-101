import React from 'react'
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native'

export default function Back({ navigation: { goBack } }) {
    return (
        <View style={styles.view}>
            <TouchableOpacity style={styles.iconLayout} onPress={() => goBack()}>
                <Image
                    source={require('../../assets/back.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
            <Image
                source={require('../../assets/logo-transparent.png')}
                style={styles.logo}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FEDF0A',
        width: '100%',
        padding: 30
    },
    logo: {
        width: 130,
        height: 80
    },
    iconLayout: {
        position: 'absolute',
        left: 10,
        top: 8,
    },
    icon: {
        height: 45,
        width: 45,
    }
})