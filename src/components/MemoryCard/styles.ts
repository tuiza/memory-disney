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
    width: 100px;
    height: 100px;
    border-radius: 100px;
	align-items: center;
	justify-content: center;
    margin: 10px 0;
    // background-color: #E4CBCB;

    /* ${({ selected }) => selected && css`
        background-color: #F18B8B;
    `}*/

    /* ${({ visible }) => visible && css`
        background-color: #E4CBCB;
    `} */
`

export const Avatar = styled(Animated.Image)`
    // visibility: hidden;
    position: absolute;
    top: 0px;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: #F18B8B;
`
export const FrontCard = styled(Animated.View)`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: #E4CBCB;
`
export const BackCard = styled(Animated.View)`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: blue;
    position: absolute;
    top: 0px;
`