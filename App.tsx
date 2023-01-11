import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import AddList from './src/screens/Main/AdList';

const Stack = createStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddList"
            component={AddList}
            options={{headerShown: false}}
          />
          </Stack.Navigator> 
      </NavigationContainer>
    )
}


export default App;