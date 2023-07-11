import { Image, StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import VectorIcon from '../../Utills/VectorIcon'
import { black, borderGrey, grey, primaryColor, white } from '../../Utills/Color'
import Logo from '../../Assets/Images/logo.png'
import MetaLogo from '../../Assets/Images/Meta-Logo.png'



const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const onCreateAccount = () =>{
    navigation.navigate("RegisterScreen")
  }
  const onLogin = () =>{
    navigation.navigate('MainScreen')
  }

  return (
    <View style={styles.container}>
      <VectorIcon
        name="arrow-back"
        type="Ionicons"
        color={black}
        size={20}
      />
      <View style={styles.subContainer}>
        <Image source={Logo} style={styles.logoStyle} />
        <TextInput
          placeholder='Enter Email ID'
          value={email}
          onChangeText={value => setEmail(value)}
          style={styles.emailtxt}
        />
        <TextInput
          placeholder='Enter Password'
          value={password}
          onChangeText={value => setPassword(value)}
          style={styles.emailtxt}
        />
<TouchableOpacity style={styles.loginBtn} onPress={onLogin} > 
  <Text style={styles.loginBtntxt}> Login</Text>
</TouchableOpacity>

<Text style={styles.Forget}>Forget Password?</Text>

<TouchableOpacity onPress={onCreateAccount}    style={styles.newAccount} > 
  <Text style={styles.newAccounttxt}> Create New Account </Text>
</TouchableOpacity>
<Image source={MetaLogo} style={styles.metaLogoimg} />

      </View>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  logoStyle: {
    height: 50,
    width: 50,
    marginTop: '20%',
  },
  container: {
    padding: 16,
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  emailtxt: {
    borderWidth: 1,
    borderColor: borderGrey,
    padding: 10,
    borderRadius: 12,
    width: '95%',
    marginTop: 12,
  },
  loginBtn:{
    backgroundColor:primaryColor,
    padding:10,
    borderRadius:20,
    width:'95%',
    alignItems:'center',
    marginTop:12,
  },
  loginBtntxt:{
    color:white,
    fontSize:15,
    fontWeight:'500',
  },
  Forget:{
    color:grey,
    fontSize:14,
    fontWeight:'500',
    marginTop:15,
  },
  newAccount:{
    borderColor:primaryColor,
    borderWidth:1,
    padding:10,
    borderRadius:18,
    width:'95%',
    alignItems:'center',
    marginTop:'25%',
  },
  newAccounttxt:{
    color:primaryColor,
    fontSize:14,
    fontWeight:'400',
  },
  metaLogoimg:{
    height:15,
    width:70,
    marginTop:15,
  }

})