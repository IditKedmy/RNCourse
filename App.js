import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NameInput from "./components/NameInput";
import NameItem from "./components/NameItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseNames, setCourseNames] = useState([]);

  function startAddNameHandler() {
    setModalIsVisible(true);
  }

  function endAddNameHandler() {
    setModalIsVisible(false);
  }

  function addNameHandler(enteredNameText) {
    setCourseNames((currentCourseNames) => [
      ...currentCourseNames,
      { text: enteredNameText, id: Math.random().toString() },
    ]);
    endAddNameHandler();
  }

  function deleteNameHandler(id) {
    setCourseNames((currentCourseNames) => {
      return currentCourseNames.filter((name) => name.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Name"
          color="#a065ec"
          onPress={startAddNameHandler}
        />
        <NameInput
          visible={modalIsVisible}
          onAddName={addNameHandler}
          onCancel={endAddNameHandler}
        />
        <View style={styles.namesContainer}>
          <FlatList
            data={courseNames}
            renderItem={(itemData) => {
              return (
                <NameItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteNameHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  namesContainer: {
    flex: 5,
  },
});