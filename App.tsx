import React, { useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Button from './src/components/Button';
import Label from './src/components/Label';
import MemoryCard from './src/components/MemoryCard';
import { Modal } from './src/components/Modal';
import Colors from './src/utils/colors';

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Label color={Colors.purple} fontSize={50}>
      Memória
      </Label>
      <MemoryCard
        princess="adormecida"
        selected={false}
        visible={true} />
      <Button backgroundColor={Colors.pink}>
        <Label color={Colors.purple}>Reiniciar</Label>
      </Button>
      <Button backgroundColor={Colors.purple}>
        <Label color={Colors.pink}>Novo</Label>
      </Button>
      <Button backgroundColor={Colors.purple} onPress={()=>setOpen(true)}>
        <Label color={Colors.pink}>Modal</Label>
      </Button>
      <Modal open={open} onClosed={()=> setOpen(false)}>
        <MemoryCard
        princess="adormecida"
        selected={false}
        visible={true} />
      </Modal>
    </GestureHandlerRootView>
    
  );
}

