import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
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

  return (
      <View style={styles.section}>
          <View style={[styles.row, styles.list, styles.titleContainer]}>
            <View style={styles.titleContainerLeft}>
              <Text style={[styles.sectionTitle, styles.titleLeft]}>{title}</Text>
              <Image source={require('../../assets/icons/info.png')} style={styles.titleContainerLeftImg} />
            </View>
            <View style={styles.titleContainerRight}>
              <Image source={require('../../assets/icons/arrow-right.png')}  style={styles.titleContainerRightImg}/>
            </View>
          </View>
          
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.list}>
          {reverse && 
            EnseigneData.slice(0).reverse().map((item, index) => {
              return (
                <CardEnseigne type="slider" key={index} data={item} />
              )
            })
          }

          {!reverse && 
            EnseigneData.map((item, index) => {
              return (
                <CardEnseigne type="slider" key={index} data={item} />
              )
            })
          }
            
          </ScrollView>
      </View>
    )
}