import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import {Text, View, StyleSheet, Pressable} from "react-native";

export default function NameItem(props: { text: string; onDeleteItem: () => void; id: string}): ReactElement<any, string | JSXElementConstructor<any>> | ReactNode | ReactPortal {
  return (
    <View style={styles.nameItem}>
      <Pressable
          android_ripple={{color: '#dddddd'}}
          onPress={props.onDeleteItem.bind(this, props.id)}
          style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.nameText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  nameItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  nameText: {
    color: '#ffffff',
    padding: 8,
  },
});