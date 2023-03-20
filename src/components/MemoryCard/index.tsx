import React from 'react'
import { Image, ImageSourcePropType, PressableProps, Pressable } from 'react-native'
import bela from '../../imgs/bela.png'
import adormecida from '../../imgs/adormecida.png'
import sin from '../../imgs/sin.png'
import mulan from '../../imgs/mulan.png'
import ariel from '../../imgs/ariel.png'
import merida from '../../imgs/merida.png'
import branca from '../../imgs/branca.png'
import cinderela from '../../imgs/cinderela.png'
import tina from '../../imgs/tina.png'
import * as S from './styles'
import {
    useSharedValue,
    useAnimatedStyle,
    interpolate,
    withTiming
} from 'react-native-reanimated';

export enum PRINCESS_ENUM {
    bela = 'bela',
    adormecida = 'adormecida',
    sin = 'sin',
    mulan = 'mulan',
    ariel = 'ariel',
    merida = 'merida',
    branca = 'branca',
    cinderela = 'cinderela',
    tina = 'tina'
}

const PRINCESS: { [k: string]: ImageSourcePropType } = {
    bela,
    adormecida,
    mulan,
    sin,
    ariel,
    merida,
    branca,
    cinderela,
    tina
}

type MemoryCardProps = {
    princess: keyof typeof PRINCESS_ENUM
    visible: boolean,
    selected: boolean,
    onTest: () => void
} & PressableProps

export default function ({ princess, visible, selected, onTest, ...rest }: MemoryCardProps) {
    const rotateY = useSharedValue(0)

    const frontAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                rotateY:
                    `${interpolate(rotateY.value, [0, 1], [0, 180])}deg`
            }]
        }
    })
    const backAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                rotateY:
                    `${interpolate(rotateY.value, [0, 1], [180, 360])}deg`
            }]
        }
    })

    const testeAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                rotateY:
                    `${interpolate(rotateY.value, [0, 1], [360, 180])}deg`
            }]
        }
    })
    const onHandleCard = () => {
        onTest()
        const newValue = rotateY.value === 0 ? 1 : 0;
        rotateY.value = withTiming(newValue, { duration: 400 });
    }
    return (
        <S.Container visible={visible} selected={selected} onPress={onHandleCard}  >
            {(visible || selected) && (
                <>
                    <S.Avatar style={backAnimatedStyle} source={PRINCESS[princess]} />
                </>) 
            }
            {!selected && <S.FrontCard style={testeAnimatedStyle} />}
        </S.Container>
    )
}