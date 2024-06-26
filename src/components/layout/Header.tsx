import React, { useState } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';
import ToggleMode from "../item/ToggleMode.tsx"
import styles from '../../../Styles.tsx';

function Header() {
  const address = "19 rue Yves Toudic";

  return (
    <View style={styles.navBar}>
      <View style={styles.row}>
        <View style={styles.columnContent}>
          <Text style={styles.addressTextLabel}>Livrer maintenant</Text>
          <View style={styles.rowAddress}>
            <Text style={styles.addressText}>{address}</Text>
            <Image source={require('../../assets/icons/arrow-down.png')} style={styles.rowAddressArrow}/>
          </View>
        </View>
        <ToggleMode  /> 
      </View>
  
      <View style={styles.row}>
        <View style={styles.searchContainer}>
          <Image source={require('../../assets/icons/black-search-line.png')} style={styles.searchImg}/>
          <TextInput
            style={styles.searchInput}
            placeholder="Rechercher Uber Eat"
            placeholderTextColor="#000" 
          />
        </View>
      </View>
    </View>
  );
}

export default Header;
