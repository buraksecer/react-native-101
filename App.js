import React, {useState} from "react";
import RootNavigator from "./src/navigation";
import {ContextProvider} from "./src/context";
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ContextProvider>
                <RootNavigator/>
            </ContextProvider>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});