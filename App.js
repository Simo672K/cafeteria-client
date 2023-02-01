import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Success from './src/screens/Success';
import Loading from './src/screens/Loading';
import Home from './src/screens/Home';
import Details from './src/screens/Details';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgImage} source={require("./src/assets/images/bg-pattern.png")} resizeMode='repeat' >
        {/* <Success /> */}
        {/* <Loading /> */}
        {/* <Home /> */}
        <Details/>
      </ImageBackground>
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
