import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles from '../../../Styles.tsx'
import {StoreContextCart} from '../../hook/useCounter.tsx';


const CountItem: React.FC = ({ data }) => {

    const [ countProduct, setCountProduct ] = useState(0);
    const { increment, decrement } = useContext(StoreContextCart);
    const [ statut, setStatut ] = useState(false);

    const handleChange = (type) => {
      if(type == 'increment'){
        setCountProduct(countProduct + 1);
        increment(); 
      } else if(type == 'decrement' && countProduct > 0){
        setCountProduct(countProduct - 1);
        decrement(); 
      }
    }

    const handleStatut = () => {
        setStatut(true);

        const timeout= setTimeout(() => {
        setStatut(false);
        }, 5000);

        return () => clearTimeout(timeout);
    }
    
  return (
    <View style={styles.buttonsQuantity}>

        {!statut && countProduct == 0 && 
            <>
                <TouchableHighlight style={styles.buttonQuantity} onPress={handleStatut}>
                    <Text style={styles.buttonQuantityText}> + </Text>
                </TouchableHighlight>
            </>
        }

        {!statut && countProduct > 0 && 
            <>
                <TouchableHighlight style={styles.buttonQuantity} onPress={handleStatut}>
                    <Text style={styles.buttonQuantityText}> {countProduct} </Text>
                </TouchableHighlight>
            </>
        }
        
        {statut && 
            <>
                <TouchableHighlight style={styles.buttonQuantity} onPress={() => { handleChange("decrement");}}>
                    <Text style={styles.buttonQuantityText}> - </Text>
                </TouchableHighlight>
                <View style={styles.buttonQuantity}>
                    <Text style={styles.buttonQuantityText}> {countProduct} </Text>
                </View>
                <TouchableHighlight style={styles.buttonQuantity} onPress={() => { handleChange("increment");}}>
                    <Text style={styles.buttonQuantityText}> + </Text>
                </TouchableHighlight>
            </>
        }
    </View>
  );
};

export default CountItem;