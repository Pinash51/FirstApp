import { StatusBar } from 'expo-status-bar';
import { useReducer, useState } from 'react';
import { View, Image, Button } from 'react-native';
import styles from './styles';

export default function App() {

  const [dice,setDice] = useState(0);

  const images = { 
    pic: {
      '0':require('./assets/dice/1.png'),
      '1':require('./assets/dice/2.png'),
      '2':require('./assets/dice/3.png'),
      '3':require('./assets/dice/4.png'),
      '4':require('./assets/dice/5.png'),
      '5':require('./assets/dice/6.png')
  }}

  const rolling = () => {
    setDice(Math.floor(Math.random()*6));
  }

  return (
    <View style={styles.container}>
      <View style={styles.imgaestyle}>
        <Image source={images.pic[dice]}/>
      </View>
      <Button title='Roll' onPress={()=>rolling()}/>
    </View>
  );
}
