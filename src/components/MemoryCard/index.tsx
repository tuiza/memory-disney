import React from 'react'
import { ImageSourcePropType, PressableProps } from 'react-native'
import * as charactersImgs from '../../imgs/index'
import * as S from './styles'
import {
    useSharedValue,
    useAnimatedStyle,
    interpolate,
    withTiming
} from 'react-native-reanimated';

import { PRINCESS, VILLAINS } from '../../utils/enuns/Characters'
import { charactersColors } from '../../utils/enuns/CharactersColors';


const CHARACTERS: { [k: string]: ImageSourcePropType } = {
    ...charactersImgs
}

type MemoryCardProps = {
    characters: keyof typeof PRINCESS | keyof typeof VILLAINS,
    visible: boolean,
    selected: boolean,
    onFlip: () => void
} & PressableProps

export default function ({ characters, visible, selected, onFlip, ...rest }: MemoryCardProps) {
    const rotateY = useSharedValue(0)

    const frontAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                rotateY:
                    `${interpolate(rotateY.value, [1, 0], [0, 180])}deg`
            }]
        }
    })

    const backAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                rotateY:
                    `${interpolate(rotateY.value, [1, 0], [180, 360])}deg`
            }]
        }
    })

    const onHandleCard = async () => {
        onFlip()
        const newValue = rotateY.value === 0 ? 1 : 0;
        rotateY.value = withTiming(newValue, { duration: 300 });
    }

    return (
        <S.Container onPress={onHandleCard} {...rest}>
            {selected
                ? (
                <S.Avatar
                    resizeMode={'contain'}
                    style={backAnimatedStyle}
                    source={CHARACTERS[characters]}
                    colors={charactersColors[characters]}
                />
                
            ) : (
                <S.FrontCard style={frontAnimatedStyle}/>
            )
            }
            {visible && (
                <S.Avatar
                    resizeMode={'contain'}
                    colors={charactersColors[characters]}
                    source={CHARACTERS[characters]}
                />
            )}
        </S.Container>
    )
}