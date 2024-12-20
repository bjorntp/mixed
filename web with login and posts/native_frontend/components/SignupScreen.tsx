import React from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';

import { MonoText } from './StyledText';
import { Text, View } from './Themed';

import Colors from '@/constants/Colors';

export default function SignupScreen() {

  const [email, onChangeEmail] = React.useState('bjorn@tenje.se');
  const [user, onChangeUser] = React.useState('bjorn');
  const [password, onChangePassword] = React.useState('pass');

  const apiUrl = "http://localhost:3000/api/"

  const signupFunction = async () => {
    console.log(user)
    try {
      await fetch(apiUrl + "users/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "email": email,
          "userName": user,
          "password": password
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
          Enter email, username and password:
        </Text>

        <TextInput
          style={styles.inputBoxes}
          onChangeText={onChangeEmail}
          value={email}
        />

        <TextInput
          style={styles.inputBoxes}
          onChangeText={onChangeUser}
          value={user}
        />

        <TextInput
          secureTextEntry={true}
          style={styles.inputBoxes}
          onChangeText={onChangePassword}
          value={password}
        />

        <Button
          title={"Submit"}
          onPress={signupFunction}
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
