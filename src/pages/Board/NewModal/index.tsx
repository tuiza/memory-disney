import React, { useContext } from 'react';
import Button from '../../../components/Button';
import Label from '../../../components/Label';
import { Modal } from '../../../components/Modal';
import * as S from './styles'
import { bad, happy } from '../../../animations'
import { sizeState, defeatsState, themeState } from '../../../../src/atoms/gameState'
import { useRecoilState, useRecoilValue } from 'recoil';
import LottieView from 'lottie-react-native';


import { ThemeContext } from 'styled-components'

type NewModalProps = {
    open: boolean
    onClosed : () => void
}

export default function NewModal({ open, onClosed }: NewModalProps) {
  const [size, setSize] = useRecoilState(sizeState);
  const [defeated, setDefeated] = useRecoilState(defeatsState);
  const themeContext = useContext(ThemeContext)
  const theme = useRecoilValue(themeState)
  const topAnimation = theme === 'light' ? happy : bad

  const handleNewGame = (size: 3 | 6 | 9) => { 
    setSize(size);
    setDefeated(defeated + 1);
    onClosed()

  }

  const getBackgroundColor = (actualSize: 3 | 6 | 9): string => {
    return actualSize === size ? themeContext.primary : themeContext.disable
  }

  const difficulty = ['Fácil', 'Médio', 'Difícil']
  const sizes: [3 , 6 , 9] = [3, 6, 9]

  const Buttons = () => {
    const buttons = []
    for (let i = 1; i < 4; i++) {
      const size = sizes[i - 1]
      const textColor = (getBackgroundColor(size) === themeContext.primary) ? themeContext.secondary : themeContext.primary
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
          <Label color={themeContext.title} fontSize={32}>Nível</Label>
          <LottieView
            autoPlay
            loop={true}
            style={{ width: 100, height: 300, position: 'absolute', bottom: 50, left: 0, zIndex: -1 }}
            source={topAnimation}
          />
          {Buttons()}
        </S.Container>
      </Modal>)
}