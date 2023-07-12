import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../CommanComponents/Header'
import TopTabbar from '../AppNavigation/TopTabbar'

const MainScreen = () => {
  return (
    <View>
        <Header/>
        <TopTabbar/>
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({})