import React, { useState } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';

function Header({count}) {
  const [address, setAddress] = useState("19 rue Yves Toudic");

  return (
    <View style={styles.navBar}>
      <View style={styles.row}>
        <View style={styles.columnContent}>
          <Text style={styles.addressTextLabel}>Livrer maintenant</Text>
          <Text style={styles.addressText}>{address}</Text>
        </View>
        <View style={styles.button}>
          <Image source={require('../../assets/img/cart.png')} style={styles.imgCart} />
          <Text style={styles.text}>Panier • {count}</Text>
       </View>
      </View>
  
      <View style={styles.row}>
        <TextInput
          style={styles.searchInput}
          placeholder="Recherche..."
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    fontSize: 16,
    marginRight: 10,
    color: 'black',
    fontWeight: '500'
  },
  icon: {
    width: 20,
    height: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    paddingLeft: 10,
    backgroundColor: "#EEEEEE"
  },
  button: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  imgCart:{
    width: 20,
    height: 20
  },
  columnContent:{
    flexDirection: "column"
  },
  addressTextLabel: {
    fontSize: 16,
    marginRight: 10,
    color: 'black'
  }
});

export default Header;
