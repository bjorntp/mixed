import React, { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Text, View } from './Themed';

export default function ListNotesScreen() {

  const [notes, setNotes] = React.useState('');

  const apiUrl = "http://localhost:3000/api/"

  const NoteCard = ({ note }) => (
    <View>
      <Text>{note.title}</Text>
      <Text>{note.body}</Text>
    </View>
  )

  const retreiveNotes = async () => {
    try {
      const token = await AsyncStorage.getItem('jwt');
      await fetch(apiUrl + "notes/viewAll", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      })
        .then(response => response.json())
        .then(data => setNotes(data))
        .catch(err => console.error("error: ", err));


    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    retreiveNotes();
  });

  const renderItem = ({ item }) => <NoteCard note={item} />;

  return (
    <View>
      <View style={styles.loginContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          List of all your notes.
        </Text>

        <FlatList
          data={notes}
          renderItem={renderItem}
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
});
