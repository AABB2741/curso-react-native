import React, { useEffect, useCallback } from 'react';
import {
	View,
	StatusBar
} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';

export default function App() {
	const [fontsLoaded] = useFonts({
		"shelter": require("./assets/fonts/shelter.otf")
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<NavigationContainer>
			<AuthProvider>
				<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
					<StatusBar barStyle="default" />
					<Routes />
				</View>
			</AuthProvider>
		</NavigationContainer>
	);
}
