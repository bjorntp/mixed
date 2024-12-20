import React from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';
import { Text, View } from './Themed';
import AsyncStorage from '@react-native-async-storage/async-storage'



export default function LoginScreen() {

  const [login, onChangeLogin] = React.useState('bjorn');
  const [password, onChangePassword] = React.useState('pass');

  const apiUrl = "http://localhost:3000/api/"

  const loginFunction = async () => {
    try {
      const response = await fetch(apiUrl + "users/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "login": login,
          "password": password
        }),
        credentials: 'include'
      });

      const data = await response.json();

      console.log(response)
      console.log(data);
      if (response.ok && data.token) {
        await AsyncStorage.setItem('jwt', data.token);
        console.log("Saved token");
      } else {
        console.log("Something went wrong while saving token")
      }
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
          Enter username and password:
        </Text>

        <TextInput
          style={styles.inputBoxes}
          onChangeText={onChangeLogin}
          value={login}
        />

        <TextInput
          secureTextEntry={true}
          style={styles.inputBoxes}
          onChangeText={onChangePassword}
          value={password}
        />

        <Button
          title="Submit"
          onPress={loginFunction}
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
    height: 30,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
});
