import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Icon } from '@iconify/react';
import styles from '../../../Styles.tsx';

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
  const [ img, setImg ] = useState({
    1: require('../../assets/img/enseigne/carrefour.webp'),
    2: require('../../assets/img/enseigne/round.webp'),
    3: require('../../assets/img/enseigne/allo-pizza.webp'),
    4: require('../../assets/img/enseigne/spice-chicken.webp'),
    5: require('../../assets/img/enseigne/washoku.webp'),
    6: require('../../assets/img/enseigne/786-burger-brasserie.webp'),
    7: require('../../assets/img/enseigne/nouilles-ceintures.webp'),
    8: require('../../assets/img/enseigne/street-bangkok-poissonniere.webp'),
    9: require('../../assets/img/enseigne/yiFang-fruit-tea-richelieu.webp'),
  });

  useEffect(() => {
    
    if (data.promo) setActivePromo(true);
  }, []);

  const handleStar = () => {
    setActiveStar(activeStar === 1 ? 0 : 1);
  };

  return (
    <TouchableHighlight underlayColor="transparent" onPress={() => {}}>
      <View style={styles.cardEnseigne}>
        <View style={styles.imgContainer}>
          {activePromo && (
            <View style={styles.promo}>
              <Text  style={styles.promoTextContent}>{data.promo}</Text>
            </View>
          )}

          <Image source={img[data.img_id]} style={styles.img} />
        </View>
        <View style={styles.enseignesInfo}>
            <View>
                <Text style={activePromo ? styles.promoText : styles.name}>{data.name}</Text>
                <View style={styles.deliveryInfo}>
                    <Image source={require('../../assets/img/uber_one.png')} style={styles.deliveryIcon} />
                    <Text tyle={styles.fraisInfo}>Frais de livraison à {data.frais} €</Text>
                </View>
            </View>
            <View style={styles.noteContainer}>
                <Text style={styles.note}>{data.note}</Text>
            </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Card;