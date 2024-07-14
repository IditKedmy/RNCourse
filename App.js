import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter a name" />
        <Button title="Add name" />
      </View>
      <View>
        <Text>Names</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
    inputContainer: {
    flexDirection: 'row',
    }
});
