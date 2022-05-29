import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import Icon from "react-native-vector-icons/FontAwesome5";

import lang from "../lang/lang";

import Feed from "./screens/Feed";
import AddPhoto from "./screens/AddPhoto";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import Register from "./screens/Register";

const authRouter = createStackNavigator({
    Login: { screen: Login, navigationOptions: { title: lang.sign.login } },
    Register: { screen: Register, navigationOptions: { title: lang.sign.register } }
}, {
    initialRouteName: "Login"
});

const loginOrProfileRouter = createSwitchNavigator({
    Profile,
    Auth: authRouter
}, {
    inititalRouteName: "Profile"
});

const MenuRoutes = {
    Feed: {
        name: "Feed",
        screen: Feed,
        navigationOptions: {
            title: lang.navigator.feed,
            tabBarIcon: ({ tintColor }) => <Icon name="home" size={30} color={tintColor} />
        }
    },
    Add: {
        name: "AddPhoto",
        screen: AddPhoto,
        navigationOptions: {
            title: lang.navigator.addPhoto,
            tabBarIcon: ({ tintColor }) => <Icon name="camera" size={30} color={tintColor} />
        }
    },
    Profile: {
        name: "Profile",
        screen: loginOrProfileRouter,
        navigationOptions: {
            title: lang.navigator.profile,
            tabBarIcon: ({ tintColor }) => <Icon name="user" size={30} color={tintColor} />
        }
    }
}

const MenuConfig = {
    inititalRouteName: "Feed",
    tabBarOptions: {
        showLabel: false
    }
}

const MenuNavigator = createAppContainer(createBottomTabNavigator(MenuRoutes, MenuConfig));
export default MenuNavigator;
