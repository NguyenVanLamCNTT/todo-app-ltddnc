import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoScreen from './screens/Todo.screen';

export default function App() {
  return (
    <View style={styles.container}>
      <TodoScreen></TodoScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
