import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../../../Styles.tsx';
import CardProduct from '../card/CardProduct.tsx';
import ProductData from '../../../data/ProductData.json';
import { useState, useEffect } from "react";

export default function SliderProduct({title, enseigne}): JSX.Element {
  const [listProduct, getListProduct] = useState(ProductData);
  
  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, styles.list]}>{title}</Text>
      <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} style={styles.list}>
        {ProductData.filter((item) => enseigne == item.enseigne ? true : false).map((item, index) => (
          <CardProduct key={index} data={item} />
        ))}
        </ScrollView>
    </View>
  )
}