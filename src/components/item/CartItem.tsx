import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from '../../../Styles.tsx';
import {StoreContextCart} from '../../hook/useCounter.tsx';

const CartItem: React.FC = () => {
  const [statut, setStatut] = useState(false);

  const { count } = useContext(StoreContextCart);

  useEffect(() => {
    setStatut(true);

    const timeout= setTimeout(() => {
      setStatut(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [count]);

  return (
    <>
      {statut && (
        <View style={styles.containerFooter}>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.text}>Voir le panier ({count})</Text>
          </TouchableHighlight>
        </View>
      )}
    </>
  );
};

export default CartItem;
