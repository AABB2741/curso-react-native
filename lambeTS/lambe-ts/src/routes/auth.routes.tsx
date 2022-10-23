import { useAuth } from "../contexts/auth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Profile from "../screens/Profile";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { AuthStackParamList } from "../@types/navigation";

const Stack = createNativeStackNavigator<AuthStackParamList>();

function Auth() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
}

export default () => {
    const { signed } = useAuth();

    return signed ? <Profile /> : <Auth />;
}
