import React from 'react';
import Button from '../../../components/Button';
import Label from '../../../components/Label';
import { Modal } from '../../../components/Modal';
import * as S from './styles'
import Colors from '../../../utils/colors';
import { useRecoilState } from 'recoil';
import { sizeState, defeatsState } from '../../../../src/atoms/gameState'

type NewModalProps = {
    open: boolean
    onClosed : () => void
}

export default function NewModal({ open, onClosed }: NewModalProps) {
  const [size, setSize] = useRecoilState(sizeState);
  const [defeated, setDefeated] = useRecoilState(defeatsState);

  const handleNewGame = (size: 3 | 6 | 9) => { 
    setSize(size);
    setDefeated(defeated + 1);
    onClosed()

  }

    return (
        <Modal open={open} onClosed={onClosed}>
            <S.Container>
            <Label color={Colors.purple} fontSize={30}>Tamanho</Label>
          <Button
            backgroundColor={size === 3 ? Colors.gray : Colors.pink}
            onPress={() => handleNewGame(3)}>
        <Label color={Colors.purple}>3</Label>
        </Button>
          <Button
            backgroundColor={size === 6 ? Colors.gray : Colors.pink}
            onPress={() => handleNewGame(6)}>
        <Label color={Colors.purple}>6</Label>
        </Button>
          <Button backgroundColor={size === 9 ? Colors.gray : Colors.pink}
            onPress={() => handleNewGame(9)}>
        <Label color={Colors.purple}>9</Label>
      </Button>
        
    </S.Container>
      </Modal>)
}