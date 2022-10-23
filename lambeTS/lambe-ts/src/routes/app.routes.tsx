import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useLang } from "../contexts/lang";
import { House, Camera, User } from "phosphor-react-native";

const Tab = createBottomTabNavigator();

import Feed from "../screens/Feed";

export default () => {
    const { lang } = useLang();

    return (
        <Tab.Navigator initialRouteName="Feed" screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
            <Tab.Screen name="Feed" component={Feed} options={{
                title: lang.feed.title,
                tabBarIcon: ({ color, focused }) => <House color={color} weight={focused ? "fill" : "light"} />,
            }} />
            <Tab.Screen name="AddPhoto" component={Feed} options={{
                title: lang.add_photo.title,
                tabBarIcon: ({ color, focused }) => <Camera color={color} weight={focused ? "fill" : "light"} />,
            }} />
            <Tab.Screen name="Profile" component={Feed} options={{
                title: lang.profile.title,
                tabBarIcon: ({ color, focused }) => <User color={color} weight={focused ? "fill" : "light"} />,
            }} />
        </Tab.Navigator>
    );
}
