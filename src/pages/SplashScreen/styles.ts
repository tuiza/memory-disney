import styled from "styled-components/native";
import AnimatedLottieView from 'lottie-react-native';

export const Container = styled.View`
     flex: 1;
     align-items: center;
     justify-content: center;
     background-color: #fff;
     padding: 5px;
`

export const Castle = styled(AnimatedLottieView)`
     width: 100%;
     flex: 1;
`

export const Logo = styled.Image`
     width: 100px;
     height: 100px;
`