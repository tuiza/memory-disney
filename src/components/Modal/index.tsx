import React, { useRef, useEffect } from 'react';
import { Modalize,  ModalizeProps } from 'react-native-modalize';
import Label from '../Label';
import { LogBox } from 'react-native';

type ModaLProps = {
  open: boolean
  children: JSX.Element
} & ModalizeProps

export const Modal = ({ open, children, ...rest}: ModaLProps) => {
  const modalizeRef = useRef<Modalize>(null);

  LogBox.ignoreLogs(['Possible Unhandled Promise Rejection']);

  useEffect(() => {
    if (open) {
   modalizeRef.current?.open()
  } 
  }, [open])

  return (
    <Modalize
      ref={modalizeRef}
      modalHeight={400}
    HeaderComponent={
      <Label color='red'>oiiii</Label>
    }
      {...rest} >{children}</Modalize>
  );
};