import { StyleSheet, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Feather from 'react-native-vector-icons/dist/Feather';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import Foundation from 'react-native-vector-icons/dist/Foundation';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import Zocial from 'react-native-vector-icons/dist/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';


const VectorIcon = ({
  name, size, color, type, onPress,
}) => {
  return (
    <View>
      {type === "MaterialCommunityIcons" ? (
        <MaterialCommunityIcons
          onPress={onPress}
          name={name}
          size={size}
          color={color}
        />)
        : type === "FontAwesome5" ? (
          <FontAwesome5 onPress={onPress} name={name} size={size} color={color}
          />) : type === "Icon" ? (
            <Icon onPress={onPress} name={name} size={size} color={color}
            />) : type === "Feather" ? (
              <Feather onPress={onPress} name={name} size={size} color={color}
              />) : type === "EvilIcons" ? (
                <EvilIcons onPress={onPress} name={name} size={size} color={color}
                />) : type === "Entypo" ? (
                  <Entypo onPress={onPress} name={name} size={size} color={color}
                  />) : type === "AntDesign" ? (
                    <AntDesign onPress={onPress} name={name} size={size} color={color}
                    />) : type === "Fontisto" ? (
                      <Fontisto onPress={onPress} name={name} size={size} color={color}
                      />) : type === "Foundation" ? (
                        <Foundation onPress={onPress} name={name} size={size} color={color}
                        />) : type === "Ionicons" ? (
                          <Ionicons onPress={onPress} name={name} size={size} color={color}
                          />) : type === "Octicons" ? (
                            <Octicons onPress={onPress} name={name} size={size} color={color}
                            />) : type === "Zocial" ? (
                              <Zocial onPress={onPress} name={name} size={size} color={color}
                              />)
          : type === "SimpleLineIcons" ? (
            <SimpleLineIcons onPress={onPress} name={name} size={size} color={color}
            />) : (
            <MaterialIcons onPress={onPress} name={name} size={size} color={color} />
          )}
    </View>
  )
}

export default VectorIcon

const styles = StyleSheet.create({})