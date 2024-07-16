import {Button, GestureResponderEvent, Image, Modal, StyleSheet, TextInput, View} from "react-native";
import {SetStateAction, useState} from "react";

export default function NameInput(props: { onAddName: (enteredName: string) => void; visible: boolean; onCancel: () => void }) {
  const [enteredName, setEnteredName] = useState('');

  function nameInputHandler(enteredText: SetStateAction<string>) {
    setEnteredName(enteredText);
  }

  function addNameHandler() {
    props.onAddName(enteredName);
    setEnteredName('');
  }
  console.log('NameInput.tsx rendered');

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image}/>
        <TextInput
            style={styles.textInput}
            placeholder="Enter a name"
            onChangeText={nameInputHandler}
            value={enteredName}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add name" onPress={addNameHandler} color="#b180f0"/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles =  StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    width: '100%',
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  }
});