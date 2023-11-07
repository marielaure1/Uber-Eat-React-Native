import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Icon } from '@iconify/react';
import styles from '../../../Styles.tsx';

interface CardImage {
  data: {
    img: string;
    name: string;
  };
}

const CardCategory: React.FC<CardProps> = ({ data }) => {

    const [ img, setImg ] = useState({
        1: require('../../assets/img/category/american.png'),
        2: require('../../assets/img/category/burger.png'),
        3: require('../../assets/img/category/icecreamandyogort.png'),
        4: require('../../assets/img/category/sushi.png'),
        5: require('../../assets/img/category/italian.png'),
        6: require('../../assets/img/category/asian.png'),
        7: require('../../assets/img/category/fastfood.png'),
        8: require('../../assets/img/category/french.png'),
        9: require('../../assets/img/category/indian.png'),
        10: require('../../assets/img/category/japanese.png'),
        11: require('../../assets/img/category/sandwich.png'),
        12: require('../../assets/img/category/streetfood.png'),
    });

    return (
        <TouchableHighlight underlayColor="transparent" onPress={() => {}}>
            <View style={styles.cardCategory}>
                <View style={styles.imgContainerCategory}>
                    <Image source={img[data.img_id]} style={styles.imgCategory} />
                </View>
                <View style={styles.categoryInfo}>
                    <Text style={styles.nameCategory}>{data.name}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
};

export default CardCategory;