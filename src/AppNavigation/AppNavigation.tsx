import { StatusBar} from 'react-native'
import React from 'react'
import LoginScreen from '../Screens/Login/LoginScreen'
import { white } from '../Utills/Color'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../Screens/Register/RegisterScreen'
import MainScreen from '../Screens/MainScreen';


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={white} barStyle='dark-content' />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name='MainScreen' component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>




  )
}

export default AppNavigation

