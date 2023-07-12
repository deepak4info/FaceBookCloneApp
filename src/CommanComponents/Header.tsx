import {View, Image, StyleSheet} from 'react-native';
import React from 'react';

import FacebookLogo from '../Assets/Images/fblogo.png'
import VectorIcon from '../Utills/VectorIcon';
import { black,grey,lightgrey,white } from '../Utills/Color'

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={FacebookLogo} style={styles.fbLogoStyle} />
      <View style={styles.headerIcons}>
        <View style={styles.searchBg}>
          <VectorIcon
            name="search"
            type="FontAwesome5"
            size={19}
            color={grey}
          />
        </View>
        <View style={styles.searchBg}>
          <VectorIcon
            name="messenger"
            type="Fontisto"
            size={22}
            color={grey}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fbLogoStyle: {
    height: 25,
    width: 130,
  },
  searchBg: {
    backgroundColor:lightgrey,
    height: 35,
    width: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  container: {
    backgroundColor:white,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerIcons: {
    flexDirection: 'row',
  },
});

export default Header;
