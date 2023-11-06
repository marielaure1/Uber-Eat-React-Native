import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Icon } from '@iconify/react';
import styles from '../../../Styles.tsx';
// import UberOne from '../../assets/img/uber_one.png';
// import Carrefour from '../../assets/img/carrefour.webp';

interface CardImage {
  data: {
    img: string;
    name: string;
  };
}

const CardImage: React.FC<CardProps> = ({ data, index }) => {

    const [ img, setImg ] = useState([
        require('../../assets/img/american.png'),
        require('../../assets/img/burger.png'),
        require('../../assets/img/icecreamandyogort.png'),
        require('../../assets/img/sushi.png'),
        require('../../assets/img/italian.png')
    ]);

    return (
        <TouchableHighlight underlayColor="transparent" onPress={() => {}}>
            <View style={styles.cardImage}>
                <View style={styles.imgContainerCategory}>
                    <Image source={img[index]} style={styles.imgCategory} />
                </View>
                <View style={styles.categoryInfo}>
                    <Text style={styles.nameCategory}>{data.name}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
};

export default CardImage;