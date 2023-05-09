import styled from 'styled-components/native'
import { Platform, StatusBar } from "react-native";

export const Container = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	justify-content: flex-start;
	padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
	background-color: ${({ theme }) => theme.background};
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
`

export const FooterContainer = styled.View`
	flex-direction: row;
	justify-content: space-around;
	align-content: center;
	width: 100%;
`

export const Logo = styled.Image`
    width: 60px;
    height: 60px;
`