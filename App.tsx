import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, Slider, View, Image } from 'react-native';
import styles from './Styles.tsx';
import Header from './src/components/layout/Header.tsx';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Account from './src/pages/Account';
import useCounter from './src/hook/useCounter.tsx';

// const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
  const { count, increment, decrement } = useCounter(0);

  return (
    <SafeAreaView style={styles.home}>
      <StatusBar/>
      <Header count={count}/>

    <Home increment={increment} decrement={decrement} count={count}/>
    <Account/>
    </SafeAreaView>
  );
}


// <NavigationContainer initialRouteName="Home">
//   <Stack.Navigator>
//     <Stack.Screen name="Home" component={HomeScreen} />
//   </Stack.Navigator>
// </NavigationContainer>