import { StyleSheet } from 'react-native';


import { Text, View } from '@/components/Themed';
import LoginScreen from '@/components/LoginScreen';

export default function() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login page</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <LoginScreen />
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
