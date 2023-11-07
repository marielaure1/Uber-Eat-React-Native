import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../../../Styles.tsx';
import CardEnseigne from '../card/CardEnseigne.tsx';
import EnseigneData from '../../../data/EnseigneData.json';
import { useState, useEffect } from "react";

export default function SliderEnseigne({title, reverse}): JSX.Element {

  // function randomEnseigne(array) {
  //   for (let i = array.length - 1; i > 0; i--) {

  //     const j = Math.floor(Math.random() * (i + 1));

  //     [array[i], array[j]] = [array[j], array[i]];
      
  //   }
  // }

  // randomEnseigne(EnseigneData);

  const [listEnseigne, getListEnseigne] = useState(EnseigneData);

  return (
      <View style={styles.section}>
          <Text style={[styles.sectionTitle, styles.list]}>{title}</Text>

          
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.list}>
          {reverse && 
            listEnseigne.slice(0).reverse().map((item, index) => {
              return (
                <CardEnseigne type="slider" key={index} data={item} />
              )
            })
          }

          {!reverse && 
            listEnseigne.map((item, index) => {
              return (
                <CardEnseigne type="slider" key={index} data={item} />
              )
            })
          }
            
          </ScrollView>
      </View>
    )
}