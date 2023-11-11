import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles from '../../../Styles.tsx'


const CountItem: React.FC = ({ data, increment, decrement }) => {

    const [ count, setCount ] = useState(0);
    const [ statut, setStatut ] = useState(false);

    const handleChange = (type) => {
      if(type == 'increment'){
        setCount(count + 1);
        increment(); 
      } else if(type == 'decrement' && count > 0){
        setCount(count - 1);
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

        {!statut && count == 0 && 
            <>
                <TouchableHighlight style={styles.buttonQuantity} onPress={handleStatut}>
                    <Text style={styles.buttonQuantityText}> + </Text>
                </TouchableHighlight>
            </>
        }

        {!statut && count > 0 && 
            <>
                <TouchableHighlight style={styles.buttonQuantity} onPress={handleStatut}>
                    <Text style={styles.buttonQuantityText}> {count} </Text>
                </TouchableHighlight>
            </>
        }
        
        {statut && 
            <>
                <TouchableHighlight style={styles.buttonQuantity} onPress={() => { handleChange("decrement");}}>
                    <Text style={styles.buttonQuantityText}> - </Text>
                </TouchableHighlight>
                <View style={styles.buttonQuantity}>
                    <Text style={styles.buttonQuantityText}> {count} </Text>
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