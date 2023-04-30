import React from 'react'
import { Pressable, StyleSheet, Text, View, Image} from 'react-native'
import { colors } from '@theme';
import { SSButtonContainer, SSocialButton } from './button.styled';

interface Props{
  google?: Boolean
}
export const SocialButton = ({ google }: Props ) => {
  return (
    <SSButtonContainer >
      <SSocialButton 
        style={styles.button}
        onPress={() => console.log("Login with google")}>
        <Image 
        style={styles.googleIcon}
        source={ google ? require('../../../assets/google-icon.png') : require('../../../assets/fb-icon.png')}/>  
        <Text style={styles.text}>
         {`Continuar con ${google ? "Google" : "Facebook"}`}
        </Text>
      </SSocialButton>
    </SSButtonContainer>
  )
}

const styles = StyleSheet.create({
  button:{
    shadowColor: "#00000063",
    elevation: 5,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 10,

  },
  text:{
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: "#000000"
  },
  googleIcon:{
    width: 35,
    height: 35
  }
})
