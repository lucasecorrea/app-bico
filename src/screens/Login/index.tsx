import {useNavigation} from '@react-navigation/native';
import React, {Fragment, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import tw from '../../../service/tw';
import {Image} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import HR from '../../components/HR';

const Login = () => {
	const navigation = useNavigation();
	const insets = useSafeAreaInsets();
	const customLabelCreateAccount = (
		<Text style={tw`text-primary font-semibold  pl-1`}>Crie a sua</Text>
	);

	const customerLabelHelper = (
		<Text style={tw`text-primary font-semibold pl-1`}>Fale com a gente</Text>
	);

	const bicoLabelCustomer = (
		<Text style={tw`text-primary font-semibold text-2xl`}>Bico ;)</Text>
	);

	const [login, setLogin] = useState('');
	const [senha, setSenha] = useState('');

	return (
		<View style={tw`flex-1`}>
			<View style={tw`ios:h-${Math.floor(insets.top / 4)}`}>
				<SafeAreaView style={tw`bg-primary`} />
			</View>
			<View style={tw`flex-1 px-10 justify-center bg-white`}>
				<View style={tw`pt-8 pb-10`}>
					<Text style={tw`text-2xl`}>Entre na sua conta da</Text>
					{bicoLabelCustomer}
				</View>
				<TouchableOpacity style={tw`rounded h-11 justify-center items-center bg-facebook-color mt-4`}
					onPress={() => {
						navigation.navigate('Menu');
					}}>
					<View style={tw`flex-row justify-between items-center`}>
						<Image style={tw`rounded h-5 w-5 right-17`} source={require('D:/Projetos/app-bico/src/images/facebook.png')} />
						<Text style={tw`text-white`}>Entrar com o Facebook</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={tw`border border-slate-300 rounded h-11 justify-center items-center bg-white mt-4`}
					onPress={() => {
						navigation.navigate('Menu');
					}}>
					<View style={tw`flex-row justify-between items-center `}>
						<Image style={tw`rounded h-5 w-5 right-17`} source={require('D:/Projetos/app-bico/src/images/gmail.png')} />
						<Text style={tw`pr-7`}>Entrar com Google</Text>
					</View>
				</TouchableOpacity>
				<View style={tw`py-7`}>
					<Text>Usuário</Text>
					<TextInput
						style={tw`border-[0.50] border-solid rounded-md h-11 border-slate-400 pl-2 mt-2 mb-2`}
						onChangeText={setLogin}
						value={login}
					/>
					<Text>Senha</Text>
					<TextInput
						style={tw`border-[0.50] border-solid rounded-md h-11 border-slate-400 pl-2 mt-2`}
						onChangeText={setSenha}
						value={senha}
					/>
				</View>
				<TouchableOpacity style={tw`rounded-lg h-11 justify-center items-center bg-primary`}
					onPress={() => {
						navigation.navigate('AddList');
					}}>
					<Text style={tw`text-white`}>Login</Text>
				</TouchableOpacity>
				<View style={tw`flex-row justify-center pt-5`}>
					<Text>Não tem uma conta?</Text>
					<TouchableOpacity onPress={() => {
						navigation.navigate('Cadastro');
					}}>{customLabelCreateAccount}</TouchableOpacity>
				</View>
			</View>
			<View style={tw`justify-center items-center bg-white pb-5 bg-white`}>
				<HR tw={tw} style={tw`w-[125%] h-[0.2]`}/>
				<View style={tw`flex-row justify-center items-center pt-5`}>
					<Text style={tw`mx-1`}>Precisa de ajuda?</Text>
					<TouchableOpacity>{customerLabelHelper}</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default Login;
