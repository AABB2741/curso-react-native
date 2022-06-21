import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome5";

import * as Screen from "./Screen";

import Feed from "./screens/Feed";
import lang from "../lang/lang";
import AddPhoto from "./screens/AddPhoto";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import Register from "./screens/Register";

const Stack = createStackNavigator();
function LoginOrProfileRouter() {
    return (
        <Stack.Navigator initialRouteName={Screen.Profile} screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name={Screen.Profile}
                component={Profile}
            />
            <Stack.Screen
                name={Screen.Login}
                component={Login}
            />
            <Stack.Screen
                name={Screen.Register}
                component={Register}
            />
        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();
const MenuConfig = {
    initialRouteName: Screen.Feed
}

const tabBarSettings = {
    tabBarShowLabel: false
}

function MenuRoutes() {
    return (
        <Tab.Navigator {...MenuConfig} screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name={Screen.Feed}
                component={Feed}
                options={{
                    ...tabBarSettings,
                    title: lang.navigator.feed,
                    tabBarIcon: ({ color }) => <Icon name="home" size={30} color={color} />
                }}
            />
            <Tab.Screen
                name={Screen.AddPhoto}
                component={AddPhoto}
                options={{
                    ...tabBarSettings,
                    title: lang.navigator.addPhoto,
                    tabBarIcon: ({ color }) => <Icon name="camera" size={30} color={color} />
                }}
            />
            <Tab.Screen
                name={Screen.Sign}
                component={LoginOrProfileRouter}
                options={{
                    ...tabBarSettings,
                    title: lang.navigator.profile,
                    tabBarIcon: ({ color }) => <Icon name="user" size={30} color={color} />
                }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer >
            <MenuRoutes />
        </NavigationContainer>
    );
}
