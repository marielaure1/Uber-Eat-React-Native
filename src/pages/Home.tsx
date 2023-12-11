import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, Slider, View, Image } from 'react-native';
import styles from '../../Styles.tsx';
import Header from '../components/layout/Header.tsx';
import SliderCategory from '../components/home/SliderCategory.tsx';
import SliderEnseigne from '../components/home/SliderEnseigne.tsx';
import SliderProduct from '../components/home/SliderProduct.tsx';
import SliderFilter from '../components/home/SliderFilter.tsx';
import SliderAnnonce from '../components/home/SliderAnnonce.tsx';
import CardEnseigne from '../components/card/CardEnseigne.tsx';
import CartItem from '../components/item/CartItem.tsx';
import EnseigneData from '../../data/EnseigneData.json';
import useCounter from '../hook/useCounter.tsx';
import { useState, useEffect } from "react";

import AccountForm from '../components/form/AccountForm.tsx';

export default function Home({count, increment, decrement}): JSX.Element {

  return (
    <>
    <SafeAreaView style={styles.home}>
      <StatusBar/>
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

          <AccountForm/>
        </View>
      </ScrollView>

      <CartItem count={count} />
    </SafeAreaView>
    <CartItem count={count} />


    </>
  );
}