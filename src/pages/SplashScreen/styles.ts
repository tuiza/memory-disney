import styled from "styled-components/native";
import AnimatedLottieView from 'lottie-react-native';

export const Container = styled.View`
     flex: 1;
     align-items: center;
     justify-content: center;
     background-color: #D9B5B5;
`

export const Animation = styled(AnimatedLottieView)`
     height: 70%;
     align-items: center;
     justify-content: center;
`

export const Logo = styled.Image`
     position: absolute;
     bottom: -20px;
     width: 120px;
     height: 120px;
`