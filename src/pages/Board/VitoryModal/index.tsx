import React, { useState } from 'react';
import Button from '../../../components/Button';
import Label from '../../../components/Label';
import { Modal } from '../../../components/Modal';
import * as S from './styles'
import Colors from '../../../utils/colors';
import NewModal from '../NewModal';
import { useRecoilValue } from 'recoil';
import { movesState, timerState } from '../../../atoms/gameState';

type NewModalProps = {
  open: boolean
  onClosed: () => void
  setNewModal: () => void
}

export default function VitoryModal({ open, onClosed, setNewModal }: NewModalProps) {
  const moves = useRecoilValue(movesState);
  const timer = useRecoilValue(timerState);
  return (
    <Modal open={open} onClosed={onClosed}>
      <S.Container>
        <Label color={Colors.purple} fontSize={30} style={{ borderBottomColor: Colors.purple, flex: 0.5 }}>Vitória</Label>
        <S.InfosContainer>
          <Label color={Colors.purple}>Tempo: {timer}</Label>
          <Label color={Colors.purple}>Movimentos:{moves}</Label>
        </S.InfosContainer>
        <Button backgroundColor={Colors.pink} onPress={setNewModal}>
          <Label color={Colors.purple}>Outro tamanho</Label>
        </Button>
        <Button backgroundColor={Colors.pink} onPress={onClosed}>
          <Label color={Colors.purple}>Continuar</Label>
        </Button>
      </S.Container>
    </Modal>)
}