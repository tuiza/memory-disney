import styled, {css} from 'styled-components/native'

type AvatarProps = {
    visible: boolean
    selected: boolean
}

type Memory = {
    visible: boolean
    selected: boolean
}

export const Container = styled.View<Memory>`
    width: 100px;
    height: 100px;
    border-radius: 100px;
	align-items: center;
	justify-content: center;

    ${({ selected }) => selected && css`
        background-color: #F18B8B;
    `}

    ${({ visible }) => visible && css`
        background-color: #E4CBCB;
    `}
`

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;

`