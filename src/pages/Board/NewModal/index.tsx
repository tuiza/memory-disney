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
  const theme = useContext(ThemeContext)

  const handleNewGame = (size: 3 | 6 | 9) => { 
    setSize(size);
    setDefeated(defeated + 1);
    onClosed()

  }

  const getBackgroundColor = (actualSize: 3 | 6 | 9): string => {
    return actualSize === size ? theme.primary : theme.disable
  }

  const difficulty = ['Fácil', 'Médio', 'Difícil']
  const sizes: [3 , 6 , 9] = [3, 6, 9]

  const Buttons = () => {
    const buttons = []
    for (let i = 1; i < 4; i++) {
      const size = sizes[i - 1]
      const textColor = (getBackgroundColor(size) === theme.primary) ? theme.secondary : theme.primary
      buttons.push(
        <Button
          key={i}
          backgroundColor={getBackgroundColor(size)}
          onPress={() => handleNewGame(size)}
          text={difficulty[i - 1]}
          textColor={textColor}
        />
      )
    }
    return buttons
  }

    return (
      <Modal open={open} onClosed={onClosed} > 
            <S.Container>
          <Label color={theme.title} fontSize={32}>Nível</Label>
          {Buttons()}
    </S.Container>
      </Modal>)
}