import styled from 'styled-components/native'
import { Platform, StatusBar } from "react-native";

export const Container = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	justify-content: flex-start;
	padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
	background-color: ${({ theme }) => theme.background};
	padding-bottom: 10px;
`

export const InfosContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-content: center;
	width: 95%;
	padding: 0 20px;
`

export const ButtonsContainer = styled.View`
	align-items: center;
	justify-content: center;
	flex-direction: row;
	
`

export const CardContainer = styled.ScrollView<{ size: number }>`
	width: 350px;
	align-self: center;
	height: ${({ size }) => size * 70}px;
	align-content: center;
	background-color: transparent;
`

export const Logo = styled.Image`
    width: 60px;
    height: 30px;
`