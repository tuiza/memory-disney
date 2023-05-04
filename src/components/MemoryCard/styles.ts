import styled, { css } from 'styled-components/native'
import Animated from 'react-native-reanimated'

type AvatarProps = {
    visible: boolean
    selected: boolean
}

type Memory = {
    visible: boolean
    selected: boolean
}

export const Container = styled.Pressable<Memory>`
    width: 105px;
    height: 105px;
    border-radius: 100px;
	align-items: center;
	justify-content: center;
    margin: 8px 0;
`

export const Avatar = styled(Animated.Image)`
    position: absolute;
    top: 0px;
    width: 105px;
    height: 105px;
    border-radius: 100px;
    background-color: #F18B8B;
`

export const FrontCard = styled(Animated.View)`
    width: 105px;
    height: 105px;
    border-radius: 100px;
    background-color: #E4CBCB;
`

export const BackCard = styled(Animated.View)`
    width: 105px;
    height: 105px;
    border-radius: 100px;
    background-color: blue;
    position: absolute;
    top: 0px;
`