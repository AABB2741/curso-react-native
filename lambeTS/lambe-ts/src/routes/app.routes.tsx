import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useLang } from "../contexts/lang";
import { House, Camera, User } from "phosphor-react-native";

import Feed from "../screens/Feed";
import AddPhoto from "../screens/AddPhoto";
import AuthRoutes from "./auth.routes";
import { RootParamList } from "../@types/navigation";

const Tab = createBottomTabNavigator<RootParamList>();

export default () => {
    const { lang } = useLang();

    return (
        <Tab.Navigator initialRouteName="Feed" screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
            <Tab.Screen name="Feed" component={Feed} options={{
                title: lang.feed.label,
                tabBarIcon: ({ color, focused }) => <House color={color} weight={focused ? "fill" : "light"} />,
            }} />
            <Tab.Screen name="AddPhoto" component={AddPhoto} options={{
                title: lang.add_photo.label,
                tabBarIcon: ({ color, focused }) => <Camera color={color} weight={focused ? "fill" : "light"} />,
            }} />
            <Tab.Screen name="Profile" component={AuthRoutes} options={{
                title: lang.profile.label,
                tabBarIcon: ({ color, focused }) => <User color={color} weight={focused ? "fill" : "light"} />,
            }} />
        </Tab.Navigator>
    );
}
