import React, { useRef, useEffect } from 'react';
import { Modalize,  ModalizeProps } from 'react-native-modalize';
import Label from '../Label';

type ModaLProps = {
  open: boolean
  children: JSX.Element
} & ModalizeProps

export const Modal = ({ open, children, ...rest}: ModaLProps) => {
  const modalizeRef = useRef<Modalize>(null);
  console.log(open)

  useEffect(() => {
    if (open) {
    modalizeRef.current?.open()
  } else {
    modalizeRef.current?.close();
  }
  }, [open])

  return (
    <Modalize
      withHandle={true}
      handlePosition='outside'
      panGestureEnabled={true}
      panGestureComponentEnabled={true}
      ref={modalizeRef}
      modalHeight={500}
    HeaderComponent={
      <Label color='red'>oiiii</Label>
    }
      {...rest} >{children}</Modalize>
  );
};