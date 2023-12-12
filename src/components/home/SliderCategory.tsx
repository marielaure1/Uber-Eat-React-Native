import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../../../Styles.tsx';
import CardCategory from '../card/CardCategory.tsx';
import CategoryData from '../../../data/CategoryData.json';
import { useState, useEffect } from "react";

export default function SliderCategory(): JSX.Element {
  
  return (
        <View style={styles.section}> 
            <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} style={styles.list}>
                {CategoryData.map((item, index) => (
                <CardCategory key={index} data={item} />
                ))}
            </ScrollView>
        </View>
    )
}