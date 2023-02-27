import React, { useState } from 'react'

import Label from '../../components/Label'

import * as S from './styles'
import Colors from '../../utils/colors';
import MemoryCard from '../../components/MemoryCard';
import Button from '../../components/Button';
import NewModal from '../../components/NewModal';

type NewModalProps = {
    open: boolean
    onClosed: () => void
}

export default function Board() {
    const [open, setOpen] = useState(false);
    return (
        <S.Container>
            <Label color={Colors.purple} fontSize={50} >Memória</Label>
            <S.ButtonsContainer>

                <Button backgroundColor={Colors.pink}>
                    <Label color={Colors.purple}>Reiniciar</Label>
                </Button>
                <Button backgroundColor={Colors.purple} onPress={() => setOpen(true)}>
                    <Label color={Colors.pink}>Novo</Label>
                </Button>
            </S.ButtonsContainer>
            <NewModal open={open} onClosed={() => setOpen(false)} />
            <S.CardContainer>
                <MemoryCard
                    princess="ariel"
                    selected={false}
                    visible={true} />
                <MemoryCard
                    princess="mulan"
                    selected={false}
                    visible={true} />
                <MemoryCard
                    princess="merida"
                    selected={false}
                    visible={true} />
                <MemoryCard
                    princess="bela"
                    selected={false}
                    visible={true} />
                <MemoryCard
                    princess="mulan"
                    selected={false}
                    visible={true} />
                <MemoryCard
                    princess="sin"
                    selected={false}
                    visible={true} />
                <MemoryCard
                    princess="sin"
                    selected={false}
                    visible={true} />
                <MemoryCard
                    princess="merida"
                    selected={false}
                    visible={true} />
                <MemoryCard
                    princess="ariel"
                    selected={false}
                    visible={true} />

            </S.CardContainer>
            <S.FooterContainer>
                <Label color={Colors.purple}  >Tempo: 0:00</Label>
                <Label color={Colors.purple}>Movimentos: 6</Label>
            </S.FooterContainer>

        </S.Container>
    )
}