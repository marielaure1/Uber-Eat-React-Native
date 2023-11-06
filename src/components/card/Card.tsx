import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Icon } from '@iconify/react';
import styles from '../../../Styles.tsx';
// import UberOne from '../../assets/img/uber_one.png';
// import Carrefour from '../../assets/img/carrefour.webp';

interface CardProps {
  data: {
    promo?: string;
    img: string;
    name: string;
    note: number;
    frais: number;
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  const [activeStar, setActiveStar] = useState(0);
  const [activePromo, setActivePromo] = useState(false);

//   const imgCover = '../../assets/img/' + data.img;

  useEffect(() => {
    
    if (data.promo) setActivePromo(true);
  }, []);

  const handleStar = () => {
    setActiveStar(activeStar === 1 ? 0 : 1);
  };

  return (
    <TouchableHighlight underlayColor="transparent" onPress={() => {}}>
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          {activePromo && (
            <View style={styles.promo}>
              <Text  style={styles.promoTextContent}>{data.promo}</Text>
            </View>
          )}

          <Image source={require('../../assets/img/carrefour.webp')} style={styles.img} />
        </View>
        <View style={styles.enseignesInfo}>
            <View>
                <Text style={activePromo ? styles.promoText : styles.name}>{data.name}</Text>
                <View style={styles.deliveryInfo}>
                    <Image source={require('../../assets/img/uber_one.png')} style={styles.deliveryIcon} />
                    <Text>Frais de livraison à {data.frais} €</Text>
                </View>
            </View>
            <View style={styles.fraisInfo}>
                <Text style={styles.note}>{data.note}</Text>
            </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Card;