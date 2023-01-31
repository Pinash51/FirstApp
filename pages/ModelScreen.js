
import React, {useState} from 'react';
import {Alert, SectionList, StyleSheet, Text, View,SafeAreaView} from 'react-native';

import styles from '../styles';

export default function ModelScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);

  const DATA = [
    {
      title:'Car',
      data:['A','B','C']
    },
    {
      title:'Motor',
      data:['A','B','C']
    },
    {
      title:'Cycle',
      data:['A','B','C']
    }
  ];

  const styles = StyleSheet.create({
    centeredView: {
      textAlign: 'center',
      alignItems: 'center',
    },
    item: {
      backgroundColor: 'pink',
      fontSize:20,
    }
  });

  return (
    <View style={styles.centeredView}>
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
    </View>
    
  );
};

