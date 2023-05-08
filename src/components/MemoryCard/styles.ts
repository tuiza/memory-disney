import styled, { css } from 'styled-components/native'
import Animated from 'react-native-reanimated'

type AvatarProps = {
    visible: boolean
    selected: boolean
}

export const Container = styled.Pressable`
    width: 100px;
    height: 100px;
    border-radius: 100px;
	align-items: center;
	justify-content: center;
    margin: 8px 0;
`

export const Avatar = styled(Animated.Image)<{colors: string}>`
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    background-color: ${({colors}) => colors};
`

export const FrontCard = styled(Animated.View)`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    background-color: ${({theme}) => theme.secondary};
`

export const BackCard = styled(Animated.View)`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    background-color: blue;
    position: absolute;
    top: 0px;
`