import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {
    PageOne,
    PageTwo,
    EmptyScreen,
    OtpScreen,
} from '../screens'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ScreenName from "../constants/ScreenName";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    const token = true;

    return (
        <NavigationContainer>
            {token
                ? <Stack.Navigator
                    initialRouteName={ScreenName.SplashScreen}
                >
                    <Stack.Screen
                        name={ScreenName.EmptyScreen}
                        component={EmptyScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name={ScreenName.OtpScreen}
                        component={OtpScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
                :
                <Tab.Navigator>
                    <Tab.Screen name="Page One" component={PageOne}/>
                    <Tab.Screen name="Page Two" component={PageTwo}/>
                </Tab.Navigator>
            }
        </NavigationContainer>
    );
}
