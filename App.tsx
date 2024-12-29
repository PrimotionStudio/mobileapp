import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar as SB } from 'react-native';
import Welcome from './src/screens/Welcome';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <Welcome />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : SB.currentHeight,
    backgroundColor: '#a9ddfe',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
