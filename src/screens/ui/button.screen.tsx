import React from 'react'
import { StyleSheet, View } from 'react-native';
import { CustomButton, SocialButton } from '@ui/Button';

export const ButtonScreen = () => {
  return (
    <View style={styles.container}>
      <CustomButton text="Custom" />
      <SocialButton google />
      <SocialButton />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});