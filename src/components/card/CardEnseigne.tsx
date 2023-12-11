import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles from '../../../Styles.tsx';

interface CardProps {
  data: {
    promo?: {
      title: string;
      endDate: string;
    };
    img_id: number;  
    name: string;
    note: number;
    frais: number;
    horaires: {
      ouverture: string;
      fermeture: string;
    };
  };
}

const CardEnseigne: React.FC<CardProps> = ({ data, type = "slider" }) => {
  const [activeStar, setActiveStar] = useState(data.star); 
  const [activePromo, setActivePromo] = useState(false);
  const img = {
    1: require('../../assets/img/enseigne/carrefour.webp'),
    2: require('../../assets/img/enseigne/round.webp'),
    3: require('../../assets/img/enseigne/allo-pizza.webp'),
    4: require('../../assets/img/enseigne/spice-chicken.webp'),
    5: require('../../assets/img/enseigne/washoku.webp'),
    6: require('../../assets/img/enseigne/786-burger-brasserie.webp'),
    7: require('../../assets/img/enseigne/nouilles-ceintures.webp'),
    8: require('../../assets/img/enseigne/street-bangkok-poissonniere.webp'),
    9: require('../../assets/img/enseigne/yiFang-fruit-tea-richelieu.webp'),
  };
  const statutHoraire = useRef(false);
  const [reload, setReload] = useState(false);

  const enseigneStatut = () => {
    let now = new Date();
    let nowDateTime = now.toISOString();
    let nowDate = nowDateTime.split('T')[0];

    let a = new Date(nowDate + 'T23:59:59.999Z');
    let tomorrow = new Date(a.getTime() + 1);
    let tomorrowDateTime = tomorrow.toISOString();
    let tomorrowDate = tomorrowDateTime.split('T')[0];

    let ouverture = new Date(nowDate + 'T' + data.horaires.ouverture);
    let fermeture = new Date(nowDate + 'T' + data.horaires.fermeture);

    let date = now >= tomorrow ? nowDate : tomorrowDate;

    fermeture = ouverture > fermeture ? new Date(date + 'T' + data.horaires.fermeture) : fermeture;

    if (ouverture <= now && fermeture >= now) {
      statutHoraire.current = true;
    } else {
      statutHoraire.current = false;
    }

    if(statutHoraire.current != reload){
      setReload(statutHoraire.current);
    }
  };

  useEffect(() => {
    enseigneStatut();

    const intervalId = setInterval(() => {
      enseigneStatut();
    }, 5000); 
    return () => clearInterval(intervalId);
  }, [data.horaires]);

  useEffect(() => {
  }, [reload]);

  const handleStar = () => {
    setActiveStar((prev) => !prev);
  };

  const calculateTimeRemaining = (endDate) => {
    const now = new Date();
    const difference = new Date(endDate).getTime() - now.getTime();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    if(difference > 0){
      
      setActivePromo(true);
    } else {
      setActivePromo(false);
    }
    
    return { days, hours, minutes, seconds };
  }

  const [timeRemaining, setTimeRemaining] = useState(false);

  useEffect(() => {
    if(data?.promo?.endDate){
      const intervalId = setInterval(() => {
        setTimeRemaining(calculateTimeRemaining(data?.promo?.endDate));
      }, 1000);

      return () => clearInterval(intervalId);
    }

  }, []);

  return (
    <View underlayColor="transparent" onPress={() => {}}>
      <View style={type === "slider" ? styles.card : styles.cardEnseigne}>
        <View style={styles.imgContainer}>
          {data?.promo?.title && activePromo && statutHoraire?.current &&(
            <View style={styles.promo}>
              <Text style={styles.promoTextContent}>{data.promo.title}</Text>
            </View>
          )}

          <TouchableHighlight style={styles.star} onPress={handleStar}>
            {activeStar ? (
              <Image source={require('../../assets/icons/heart-fill.png')} style={styles.iconStar} />
            ) : (
              <Image source={require('../../assets/icons/heart-light.png')} style={styles.iconStar} />
            )}
          </TouchableHighlight>

          <Image source={img[data.img_id]} style={styles.img} />
          <View style={[styles.fermeture, statutHoraire?.current ? styles.displayNone : styles.displayFlex]}>
            <Text style={styles.fermetureText}>Fermée</Text>
          </View>

         
          
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
        {statutHoraire?.current &&  timeRemaining && (
            <View style={[styles.timerContainer]}>
            <Text style={[styles.timer]}>
              {`${timeRemaining?.days} j ${timeRemaining?.hours} h ${timeRemaining?.minutes} m ${timeRemaining?.seconds} s`}</Text>
          </View>
          )}
      </View>
    </View>
  );
};

export default CardEnseigne;
