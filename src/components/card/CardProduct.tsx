import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Icon } from '@iconify/react';
import styles from '../../../Styles.tsx'

interface CardImage {
  data: {
    img: string;
    name: string;
  };
}

const CardProduct: React.FC<CardProps> = ({ data, index, increment, decrement }) => {

    const [ img, setImg ] = useState([
        require('../../assets/img/cristaline.png'),
        require('../../assets/img/emmental.png'),
        require('../../assets/img/tomate.png'),
        require('../../assets/img/mozzarella.png'),
        require('../../assets/img/yumyum.png')
    ]);

    const [ count, setCount ] = useState(0);

    const handleChange = (type) => {
      if(type ='increment'){
        setCount(count + 1)
      } else if(type ='increment' && count > 0){
        setCount(count - 1)
      }
    }

    useEffect(() => {
      console.log(count);
      
    }, [count])
    
    

  return (
    <TouchableHighlight underlayColor="transparent">
      <View style={styles.cardProduct}>
        <View style={styles.imgContainerProduct}>
          <Image source={img[index]} style={styles.imgProduct} />

          <View style={styles.buttonsQuantity}>
            <View style={styles.buttonQuantity} onPress={() => { decrement; handleChange("decrement");}}>
               <Text style={styles.buttonQuantityText}> - </Text>
            </View>
            <View style={styles.buttonQuantity}>
              <Text style={styles.buttonQuantityText}> {count} </Text>
            </View>
            <View style={styles.buttonQuantity} onPress={() => { handleChange("increment");}}>
              <Text style={styles.buttonQuantityText}> + </Text>
            </View>
          </View>
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