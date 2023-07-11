import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import HomeScreen from '../Screens/Home/HomeScreen';

const Tab = createMaterialTopTabNavigator();


const TopTabbar = () => {
  return (
    <> 
    <Text> Top tab bar </Text>
<Tab.Navigator>
    <Tab.Screen name='Home' component={HomeScreen}/>
    <Tab.Screen name='Home' component={HomeScreen}/>
    <Tab.Screen name='Home' component={HomeScreen}/>
    <Tab.Screen name='Home' component={HomeScreen}/>
</Tab.Navigator>
</>
  )
}

export default TopTabbar
const styles = StyleSheet.create({})