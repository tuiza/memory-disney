import React from 'react'
import { SafeAreaView } from 'react-native';
import Button from './src/components/Button';
import Label from './src/components/Label';
import MemoryCard from './src/components/MemoryCard';
import Colors from './src/utils/colors';

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <MemoryCard
        princess="adormecida"
        selected={false}
        visible={true} />
      <Button backgroundColor={Colors.pink}>
        <Label text='Reiniciar' color={Colors.purple}/>
      </Button>
      <Button backgroundColor={Colors.purple}>
        <Label text='Novo' color={Colors.pink}/>
      </Button>
    </SafeAreaView>
    
  );
}

