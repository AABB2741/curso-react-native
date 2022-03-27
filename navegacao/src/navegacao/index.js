import 'react-native-gesture-handler';
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from 'react-native';

// import Drawer from "./Drawer";
import Tab from "./Tab";
// import Stack from "./Stack";

export default props => (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
            {/* <Drawer /> */}
            <Tab />
            {/* <Stack /> */}
        </NavigationContainer>
    </SafeAreaView>
);
