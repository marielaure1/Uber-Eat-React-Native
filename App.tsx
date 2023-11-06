import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, Slider, View } from 'react-native';
import styles from './Styles.tsx';
import Header from './src/components/layout/Header.tsx';
import Card from './src/components/card/Card.tsx';
import CardImage from './src/components/card/CardImage.tsx';
import CardProduct from './src/components/card/CardProduct.tsx';
import EnseigneData from './data/EnseigneData.json';
import CategoryData from './data/CategoryData.json';
import ProductData from './data/ProductData.json';
import useCounter from './src/hook/useCounter.tsx';
import { useState, useEffect } from "react";

function App(): JSX.Element {
  const [listEnseigne, getListEnseigne] = useState(EnseigneData);
  const [listCategory, getListCategory] = useState(CategoryData);
  const { count, increment, decrement } = useCounter(0);
  
  return (
    <SafeAreaView style={styles.home}>
      <StatusBar/>
      <Header count={count}/>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.home}>
          <View style={styles.listEnseigne}  style={styles.section}>
            <View>
            <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
              {listCategory.map((item, index) => (
                <CardImage key={index} data={item} index={index} />
              ))}
              </ScrollView>


            </View>
          </View>
          <View style={styles.listEnseigne}  style={styles.section}>
            <Text style={styles.sectionTitle}>Découvrez</Text>
            <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {listEnseigne.map((item, index) => {
                return (
                  <Card key={index} data={item} />
                )
              })}
              </ScrollView>


            </View>
          </View>

          <View style={styles.listEnseigne}  style={styles.section}>
            <Text style={styles.sectionTitle}>Carrefour</Text>
            <View>
            <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
              {ProductData.map((item, index) => (
                <CardProduct key={index} data={item}  index={index} increment={increment} decrement={decrement}/>
              ))}
              </ScrollView>


            </View>
          </View>

          <View style={styles.listEnseigne}  style={styles.section}>
            <Text style={styles.sectionTitle}>Découvrez</Text>
            <View>
            <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
              {listEnseigne.map((item, index) => (
                <Card key={index} data={item} />
              ))}
              </ScrollView>
            </View>
          </View>

          <View style={styles.listEnseigne}  style={styles.section}>
            <Text style={styles.sectionTitle}>Découvrez</Text>
            <View>
            <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
              {listEnseigne.map((item, index) => (
                <Card key={index} data={item} />
              ))}
              </ScrollView>


            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;