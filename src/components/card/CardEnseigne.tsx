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

const CardEnseigne: React.FC<CardProps> = ({ data, type = "slider" }) => {
  const [activeStar, setActiveStar] = useState(data.star);
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
    setActiveStar(activeStar ? 0 : 1);
  };

  return (
    <View underlayColor="transparent" onPress={() => {}}>
      <View style={type == "slider" ? styles.card : styles.cardEnseigne}>
        <View style={styles.imgContainer}>
          {activePromo && (
            <View style={styles.promo}>
              <Text  style={styles.promoTextContent}>{data.promo}</Text>
            </View>
          )}

          <TouchableHighlight style={styles.star} onPress={handleStar}>
            { activeStar ? (
                <Image source={require('../../assets/icons/heart-fill.png')} style={styles.iconStar}/>
            ) : (
              <Image source={require('../../assets/icons/heart-light.png')} style={styles.iconStar}/>
            )
            }
              
          </TouchableHighlight>

          <Image source={img[data.img_id]} style={styles.img} />
        </View>
        <View style={styles.enseignesInfo}>
            <View>
                <Text style={activePromo ? styles.promoText : styles.name}>{data.name}</Text>
                <View style={styles.deliveryInfo}>
                    <Image source={require('../../assets/icons/uber_one.png')} style={styles.deliveryIcon} />
                    <Text style={styles.fraisInfo}>Frais de livraison à {data.frais} €</Text>
                </View>
            </View>
            <View style={styles.noteContainer}>
                <Text style={styles.note}>{data.note}</Text>
            </View>
        </View>
      </View>
    </View>
  );
};

export default CardEnseigne;