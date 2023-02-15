import React from 'react'
import { Image, ImageSourcePropType } from 'react-native'
import bela from '../../imgs/bela.png'
import adormecida from '../../imgs/adormecida.png'
import sin from '../../imgs/sin.png'
import mulan from '../../imgs/mulan.png'
import ariel from '../../imgs/ariel.png'
import merida from '../../imgs/merida.png'
import branca from '../../imgs/branca.png'
import cinderela from '../../imgs/cinderela.png'
import * as S from './styles'

enum PrincessNames { 
    BELA = 'bela',
    ADORMECIDA = 'adormecida',
    SIN = 'sin',
    MULAN = 'mulan',
    ARIEL = 'ariel',
    MERIDA = 'merida',
    BRANCA = 'branca',
    CINDERELA = 'cinderela',
}
const PRINCESS: { [k: string]: ImageSourcePropType } = {
    bela,
    adormecida,
    mulan,
    sin,
    ariel,
    merida,
    branca,
    cinderela
}
    
type MemoryCardProps = {
    princess: keyof typeof PrincessNames
    visible: boolean,
    selected: boolean,
}

export default function ({princess, visible, selected}: MemoryCardProps) {    
    return (
        <S.Container selected={selected} visible={visible}>
            <S.Avatar
                source={bela}
                selected={selected}
                visible={visible} />
        </S.Container>
    )
}