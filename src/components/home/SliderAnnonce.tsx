import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../../../Styles.tsx';
import CardCategory from '../card/CardCategory.tsx';
import CardAnnonce from '../card/CardAnnonce.tsx';
import CategoryData from '../../../data/CategoryData.json';
import { useState, useEffect } from "react";

export default function SliderCategory(): JSX.Element {
  const [listCategory, getListCategory] = useState(CategoryData);
  
  return (
        <View style={styles.section}> 
            <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} style={styles.list}>
                <CardAnnonce/>
            </ScrollView>
        </View>
    )
}