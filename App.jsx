import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Hello from './src/components/Hello';

/* コンポーネントは全て関数として表現される */
export default function App() {
  return (
    <View style={styles.container}>
      <Hello bang>Worldゆい</Hello>
      <Hello style={{ fontSize: 16 }}>Worldゆい</Hello>

      <Text>Hello! World!</Text>
      {/* eslint-disable-next-line */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
