import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from '../../../Styles.tsx';

const ToggleMode: React.FC = () => {
  const [statut, setStatut] = useState("delivry");

  const handleChange = () => {
    statut == "delivry" ? setStatut("take away") : setStatut("delivry");
  };

  return (
    <>
        <View style={styles.buttonToggleMode}>
          
            { statut  == "delivry" ? (
                    <TouchableHighlight style={[styles.toggleMode, styles.toggleModeBlack]} onPress={handleChange}>
                        <Image source={require('../../assets/icons/white-bag-bold.png')} style={styles.toggleModeImg}/>
                    </TouchableHighlight>
                ) : (
                    <TouchableHighlight style={[styles.toggleMode, styles.toggleModeWhite]} onPress={handleChange}>
                        <Image source={require('../../assets/icons/black-bag-bold.png')} style={styles.toggleModeImg}/>
                    </TouchableHighlight>
                )
            }
          
            { statut  == "take away" ? (
                    <TouchableHighlight style={[styles.toggleMode, styles.toggleModeBlack]} onPress={handleChange}>
                        <Image source={require('../../assets/icons/white-walk-line.png')} style={styles.toggleModeImg}/>
                    </TouchableHighlight>
                ) : (
                    <TouchableHighlight style={[styles.toggleMode, styles.toggleModeWhite]} onPress={handleChange}>
                        <Image source={require('../../assets/icons/black-walk-line.png')} style={styles.toggleModeImg}/>
                    </TouchableHighlight>
                )
            }
        </View>
    </>
  );
};

export default ToggleMode;
