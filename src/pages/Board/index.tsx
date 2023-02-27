import React, { useState } from 'react'

import Label from '../../components/Label'

import * as S from './styles'
import Colors from '../../utils/colors';
import MemoryCard from '../../components/MemoryCard';
import Button from '../../components/Button';

type NewModalProps = {
    open: boolean
    onClosed: () => void
}

export default function Board() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Label color={Colors.purple} fontSize={50}>Memória</Label>
            <MemoryCard
                princess="adormecida"
                selected={false}
                visible={true} />
            <Button backgroundColor={Colors.pink}>
                <Label color={Colors.purple}>Reiniciar</Label>
            </Button>
            <Button backgroundColor={Colors.purple} onPress={() => setOpen(true)}>
                <Label color={Colors.pink}>Novo</Label>
            </Button>
            <NewModal open={open} onClosed={() => setOpen(false)} />
        </>
    )
}