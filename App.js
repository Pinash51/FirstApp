
import { useState } from 'react';
import { View,Text,Modal,TextInput,TouchableWithoutFeedback,Keyboard,Button } from 'react-native';
import styles from './styles';
import ModelScreen from './pages/ModelScreen';

export default function App() {

  return (
    <View style={styles.container}>
        <ModelScreen/>
    </View>
  );
}
