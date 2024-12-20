import { StyleSheet } from 'react-native';


import { Text, View } from '@/components/Themed';
import SignupScreen from '@/components/SignupScreen';

export default function Signup() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup page</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <SignupScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
