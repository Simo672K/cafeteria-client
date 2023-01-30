import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Success from './src/screens/Success';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgImage} source={require("./src/assets/images/bg-pattern.png")} resizeMode='repeat' >
        <Success />
      </ImageBackground>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex:1,
  }
});
