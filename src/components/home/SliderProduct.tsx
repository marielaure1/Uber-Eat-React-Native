import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../../../Styles.tsx';
import CardProduct from '../card/CardProduct.tsx';
import ProductData from '../../../data/ProductData.json';
import { useState, useEffect } from "react";

export default function SliderProduct({increment, decrement}): JSX.Element {
  const [listProduct, getListProduct] = useState(ProductData);
  
  console.log(increment);
  
  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, styles.list]}>Carrefour</Text>
      <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}  style={styles.list}>
        {ProductData.map((item, index) => (
          <CardProduct key={index} data={item} increment={increment} decrement={decrement}/>
        ))}
        </ScrollView>
    </View>

    )
}