import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'

export default function Background({ children }) {
    return (
        <ImageBackground
            source={require('../../assets/background_dot2x.png')}
            resizeMode="repeat"
            style={styles.background}
        >
                {children}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        padding: 20,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
})