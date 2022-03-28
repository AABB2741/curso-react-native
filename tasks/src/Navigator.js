import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer"
import lang from "../lang/lang";

import Auth from "./screens/Auth";
import TaskList from "./screens/TaskList";

import AuthOrApp from "./screens/AuthOrApp";
import Menu from "./screens/Menu";
import commonStyles from "./commonStyles.json";

const menuConfig = {
    initialRouteName: "Today",
    contentComponent: Menu,
    contentOptions: {
        labelStyle: {
            fontFamily: commonStyles.fonts.button,
            fontWeight: "normal",
            fontSize: 20
        },
        activeLabelStyle: {
            fontWeight: "bold",
            color: "#080"
        }
    }
}

const menuRoutes = {
    Today: {
        name: "Today",
        screen: props => <TaskList title={lang.main.date.today} daysAhead={0} {...props} />,
        navigationOptions: {
            title: lang.main.date.today
        }
    },
    Tomorrow: {
        name: "Tomorrow",
        screen: props => <TaskList title={lang.main.date.tomorrow} daysAhead={1} {...props} />,
        navigationOptions: {
            title: lang.main.date.tomorrow
        }
    },
    Week: {
        name: "Week",
        screen: props => <TaskList title={lang.main.date.week} daysAhead={7} {...props} />,
        navigationOptions: {
            title: lang.main.date.week
        }
    },
    Month: {
        name: "Month",
        screen: props => <TaskList title={lang.main.date.month} daysAhead={30} {...props} />,
        navigationOptions: {
            title: lang.main.date.month
        }
    }
}

const menuNavigator = createDrawerNavigator(menuRoutes, menuConfig);

const mainRoutes = {
    AuthOrApp: {
        name: "AuthOrApp",
        screen: AuthOrApp
    },
    Auth: {
        name: "Auth",
        screen: Auth
    },
    Home: {
        name: "Home",
        screen: menuNavigator
    }
}

const mainNavigator = createSwitchNavigator(mainRoutes, {
    initialRouteName: "AuthOrApp"
});

export default createAppContainer(mainNavigator);
