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
import AccountForm from "../components/form/AccountForm"

export default function Account({count, increment, decrement}): JSX.Element {

  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior="automatic"  style={styles.scrollView}>
        <AccountForm />
      </ScrollView>
    </>
  );
}