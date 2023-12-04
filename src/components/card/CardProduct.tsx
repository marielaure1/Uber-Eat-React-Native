import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Icon } from '@iconify/react';
import styles from '../../../Styles.tsx'
import CountItem from '../item/CountItem.tsx';

interface CardCategory {
  data: {
    img: string;
    name: string;
  };
}

const CardProduct: React.FC<CardProps> = ({ data, increment, decrement }) => {

    const img = {
        1: require('../../assets/img/product/cristaline.png'),
        2: require('../../assets/img/product/emmental.png'),
        3: require('../../assets/img/product/tomate.png'),
        4: require('../../assets/img/product/mozzarella.png'),
        5: require('../../assets/img/product/yumyum.png'),
        6: require('../../assets/img/product/benenuts-fromage.webp'),
        7: require('../../assets/img/product/benenuts-nature.webp'),
        8: require('../../assets/img/product/berlin-monaco.webp'),
        9: require('../../assets/img/product/lays-ancienne.webp'),
        10: require('../../assets/img/product/lays-barbecue.webp'),
        11: require('../../assets/img/product/lays-paysanne.webp'),
        12: require('../../assets/img/product/lays-vinaigre.webp')
      };
    
  return (
    <TouchableHighlight underlayColor="transparent">
      <View style={styles.cardProduct}>
        <View style={styles.imgContainerProduct}>
          <Image source={img[data.img_id]} style={styles.imgProduct} />

          <CountItem increment={increment} decrement={decrement}/>
        </View>
        <View style={styles.productInfo}>
            <Text style={styles.nameProduct}>{data.name}</Text>
            <View style={styles.productInfoRow}>
                <Text style={styles.priceProduct}>{data.price} €  •  </Text>
                <Text style={styles.poidProduct}>{data.poid} g  • </Text>
                <Text style={styles.calProduct}>{data.cal} Cal</Text>
            </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default CardProduct;