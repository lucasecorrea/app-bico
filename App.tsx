/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import AddList from './src/screens/Main/AdList';
import CadastroAnuncio from './src/screens/Usuario/CadAnuncio';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

const Stack = createStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		ubuntu: require('./assets/fonts/Ubuntu-Light.ttf'),
	});
	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Login'>
				<Stack.Screen
					name='Login'
					component={Login}
					options={{headerShown: false}}
				/>
				<Stack.Screen
					name='Cadastro'
					component={Cadastro}
					options={{headerShown: false}}
				/>
				<Stack.Screen
					name='AddList'
					component={AddList}
					options={{headerShown: false}}
				/>
				<Stack.Screen
					name='CadastroAnuncio'
					component={CadastroAnuncio}
					options={{headerShown: false}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

