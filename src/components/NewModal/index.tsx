import React from 'react';
import Button from '../Button';
import Label from '../Label';
import { Modal } from '../Modal';
import * as S from './styles'
import Colors from '../../utils/colors';

type NewModalProps = {
    open: boolean
    onClosed : () => void
}

export default function NewModal({ open, onClosed}: NewModalProps) {
    return (
        <Modal open={open} onClosed={onClosed}>
            <S.Container>
            <Label color={Colors.purple} fontSize={30}>Tamanho</Label>
        <Button backgroundColor={Colors.pink}>
        <Label color={Colors.purple}>3</Label>
        </Button>
        <Button backgroundColor={Colors.pink}>
        <Label color={Colors.purple}>6</Label>
        </Button>
        <Button backgroundColor={Colors.pink}>
        <Label color={Colors.purple}>9</Label>
      </Button>
        
    </S.Container>
      </Modal>)
}