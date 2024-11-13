import React from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';
import { Text, View } from './Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NewNoteScreen() {

  const [title, onChangeTitle] = React.useState('title');
  const [body, onChangeBody] = React.useState('Lorem ipsum and so on ... ');

  const apiUrl = "http://localhost:3000/api/"

  const submitFunction = async () => {
    try {
      const token = await AsyncStorage.getItem('jwt');
      console.log(token)
      await fetch(apiUrl + "notes/new", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          "title": title,
          "body": body,
        })
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <View style={styles.loginContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Enter the title and body of the note.
        </Text>

        <TextInput
          style={styles.inputBoxes}
          onChangeText={onChangeTitle}
          value={title}
        />

        <TextInput
          style={styles.inputBoxes}
          onChangeText={onChangeBody}
          value={body}
        />

        <Button
          title={"Submit"}
          onPress={submitFunction}
        />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  inputBoxes: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  inputBody: {
    height: 160,
    width: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
});
