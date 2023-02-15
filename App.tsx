import React from 'react'
import { SafeAreaView } from 'react-native';
import Button from './src/components/Button';
import Label from './src/components/Label';
import MemoryCard from './src/components/MemoryCard';

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
        princess={"BRANCA"}
        selected={false}
        visible={true} />
      <Button backgroundColor='red'>
        <Label text='Memória' color='pink'/>
      </Button>
      <Button backgroundColor='red'>
        <Label text='Memória' color='pink'/>
      </Button>
    </SafeAreaView>
    
  );
}

