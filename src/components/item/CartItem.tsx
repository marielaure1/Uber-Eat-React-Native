import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from '../../../Styles.tsx';

const CartItem: React.FC = ({ count }) => {
  const [statut, setStatut] = useState(false);

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
