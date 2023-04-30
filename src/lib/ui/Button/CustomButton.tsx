import { colors } from '@theme'
import React from 'react'
import { View, ViewStyle } from 'react-native'
import { SCustomButton, SCustomButtonText } from './button.styled'

interface Props {
  onPress?: any,
  text: string,
  color?: string
  backgroundColor?: string,
  containerStyle?: ViewStyle
}
export const CustomButton = ({
  text,
  backgroundColor = colors.lightGreen,
  color = colors.white,
  containerStyle,
  onPress
}: Props) => {
  return (
    <View style={containerStyle}>
      <SCustomButton 
        style={{
          shadowColor: "#00000063",
          elevation: 5,
          shadowOffset: {
            width: 8,
            height: 8,
          },
          shadowOpacity: 1,
          shadowRadius: 10,
        }}
        backgroundColor={backgroundColor}
        onPress={onPress}>
        <SCustomButtonText color={color}>
          {text}
        </SCustomButtonText>
      </SCustomButton>
    </View>
  )
}
