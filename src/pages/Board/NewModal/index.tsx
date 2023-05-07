import React, { useContext } from 'react';
import Button from '../../../components/Button';
import Label from '../../../components/Label';
import { Modal } from '../../../components/Modal';
import * as S from './styles'
import { useRecoilState } from 'recoil';
import { sizeState, defeatsState } from '../../../../src/atoms/gameState'
import { ThemeContext } from 'styled-components'

type NewModalProps = {
    open: boolean
    onClosed : () => void
}

export default function NewModal({ open, onClosed }: NewModalProps) {
  const [size, setSize] = useRecoilState(sizeState);
  const [defeated, setDefeated] = useRecoilState(defeatsState);
  const themeContext = useContext(ThemeContext)

  const handleNewGame = (size: 3 | 6 | 9) => { 
    setSize(size);
    setDefeated(defeated + 1);
    onClosed()

  }

    return (
      <Modal open={open} onClosed={onClosed} > 
            <S.Container>
            <Label color={themeContext.primary} fontSize={32}>Nível</Label>
          <Button
            backgroundColor={size === 3 ? themeContext.primary : themeContext.disable}
            onPress={() => handleNewGame(3)}>
            <Label color={size === 3 ? themeContext.disable : themeContext.primary}>Fácil</Label>
        </Button>
          <Button
            backgroundColor={size === 6 ? themeContext.primary : themeContext.disable}
            onPress={() => handleNewGame(6)}>
            <Label color={size === 6 ? themeContext.disable : themeContext.primary}>Médio</Label>
        </Button>
          <Button backgroundColor={size === 9 ? themeContext.primary : themeContext.disable}
            onPress={() => handleNewGame(9)}>
            <Label color={size === 9 ? themeContext.disable : themeContext.primary}>Díficil</Label>
      </Button>
        
    </S.Container>
      </Modal>)
}