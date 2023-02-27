import styled, {css} from 'styled-components/native'
import { Platform, StatusBar } from "react-native";
import Label from '../../components/Label';

export const Container = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	justify-content: flex-start;
	padding-top: ${Platform.OS === "android" ? 40 : 0}px;
`

export const ButtonsContainer = styled.View`
	align-items: center;
	justify-content: center;
	flex-direction: row;
`

export const CardContainer = styled.View`
	flex: 0.90;
	width: 350px;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-content: center;
`

export const FooterContainer = styled.View`
	flex-direction: row;
	justify-content: space-around;
	align-content: center;
	width: 90%
`

export const InfoContainer = styled.View`
	border-radius: 50px;
`

