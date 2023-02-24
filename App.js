import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0)
  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    setCount(count - 1)
  }
  return (
    <View style={styles.container}>
      <Text>Counter App</Text>
      <Text style={styles.count}>{count}</Text>
      <Button style={styles.button} title="-" onPress={handleDecrement} />
      <Button style={styles.button} title="+" onPress={handleIncrement} />
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
  count: {
    fontSize: 100,
    marginBottom: 20,
  },
  button: {
    includeFontPadding: 30,
    marginBottom: 20,
  }
});
