import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, Slider, View } from 'react-native';
import styles from './Styles.tsx';
import Header from './src/components/layout/Header.tsx';
import SliderCategory from './src/components/home/SliderCategory.tsx';
import SliderEnseigne from './src/components/home/SliderEnseigne.tsx';
import SliderProduct from './src/components/home/SliderProduct.tsx';
import CardEnseigne from './src/components/card/CardEnseigne.tsx';
import EnseigneData from './data/EnseigneData.json';
import useCounter from './src/hook/useCounter.tsx';
import { useState, useEffect } from "react";

function App(): JSX.Element {
  const { count, increment, decrement } = useCounter(0);

  return (
    <SafeAreaView style={styles.home}>
      <StatusBar/>
      <Header count={count}/>
      <ScrollView contentInsetAdjustmentBehavior="automatic"  style={styles.scrollView}>
        <View style={styles.home}>

          <SliderCategory />
          <SliderEnseigne title="Commandez à nouveau" reverse/>

         <CardEnseigne type="enseigne" data={EnseigneData[7]} />
          <CardEnseigne type="enseigne" data={EnseigneData[3]} />

           <SliderProduct increment={increment} decrement={decrement}/>

          <SliderEnseigne title="Récemment consultés"/>

          <CardEnseigne type="enseigne" data={EnseigneData[6]} />
          <CardEnseigne type="enseigne" data={EnseigneData[4]} />

          <SliderEnseigne title="Swile accepté" reverse/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;