import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, Slider, View, Image } from 'react-native';
import styles from './Styles.tsx';
import Header from './src/components/layout/Header.tsx';
import SliderCategory from './src/components/home/SliderCategory.tsx';
import SliderEnseigne from './src/components/home/SliderEnseigne.tsx';
import SliderProduct from './src/components/home/SliderProduct.tsx';
import SliderFilter from './src/components/home/SliderFilter.tsx';
import SliderAnnonce from './src/components/home/SliderAnnonce.tsx';
import CardEnseigne from './src/components/card/CardEnseigne.tsx';
import CartItem from './src/components/item/CartItem.tsx';
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

          <SliderFilter />
          <SliderEnseigne title="Commandez à nouveau" reverse/>

         <CardEnseigne type="enseigne" data={EnseigneData[7]} />
          <CardEnseigne type="enseigne" data={EnseigneData[3]} />

           <SliderProduct title="Faites vos courses chez Carrefour" increment={increment} decrement={decrement} enseigne={1}/>
           <SliderAnnonce/>

          <SliderEnseigne title="Récemment consultés"/>

          <CardEnseigne type="enseigne" data={EnseigneData[6]} />
          <CardEnseigne type="enseigne" data={EnseigneData[4]} />

          <SliderProduct title="Snack" increment={increment} decrement={decrement} enseigne={2}/>

          <SliderEnseigne title="Swile accepté" reverse/>
        </View>
      </ScrollView>

      <CartItem count={count} />
    </SafeAreaView>
  );
}

export default App;