import React, { useEffect, useCallback } from 'react';
import {
	View,
	StatusBar
} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './src/routes/app.routes';

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
			<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
				<StatusBar barStyle="default" />
				<AppRoutes />
			</View>
		</NavigationContainer>
	);
}
