import styled from "styled-components/native";
import AnimatedLottieView from 'lottie-react-native';

export const ToggleConatiner = styled.View`
	margin: 20px 0;
`

export const EvilThumb = styled(AnimatedLottieView)`
	height: 60px;
	width: 60px;
	position: absolute;
	top: -20px;
`

export const RoyalThumb = styled(AnimatedLottieView)`
	height: 38px;
	width: 38px;
	position: absolute;
	top: -12px;
`