import { StyleSheet, View, ImageBackground } from 'react-native';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Success from './src/screens/Success';
import Loading from './src/screens/Loading';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Checkout from './src/screens/Checkout';


const currentTheme= {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background: 'transparent'
  }
}

const Stack= createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgImage} source={require("./src/assets/images/bg-pattern.png")} resizeMode='repeat' >
        <NavigationContainer theme={currentTheme}>
          <Stack.Navigator screenOptions={{headerShown: false, headerBackground: null, freezeOnBlur: true}}>
            <Stack.Screen name='LoadingSreen' component={Loading} />
            <Stack.Screen name='CheckoutScreen' component={Checkout} />
            <Stack.Screen name='HomeScreen' component={Home} />
            <Stack.Screen name='DetailScreen' component={Details} />
            <Stack.Screen name='SuccessScreen' component={Success} />
          </Stack.Navigator>
        </NavigationContainer>
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
