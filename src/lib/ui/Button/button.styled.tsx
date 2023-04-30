import { colors } from "@theme";
import { SSButtonText, SSCustomButton } from "@interfaces/ui/customButton.interface";
import styled from "styled-components/native";

export const SCustomButton = styled.Pressable<SSCustomButton>`
  width: 214px;
  height: 45px;
  border-radius: 13.7px;
  display: flex;
  justify-content:center;
  align-items:center;
  background-color: ${props => props.backgroundColor};
`

export const SCustomButtonText = styled.Text<SSButtonText>`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: ${props => props.color};
`

export const SSButtonContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding:  2.5px 0;
  margin: 5px;
`

export const SSocialButton = styled.Pressable`
  min-width: 214px;
  height: 45px;
  padding: 0 10px;
  border-radius: 13.7px;
  display: flex;
  flex-direction:row;
  justify-content:space-evenly;
  align-items:center;
  flex-wrap: nowrap;
  background-color: ${colors.white};
  
`