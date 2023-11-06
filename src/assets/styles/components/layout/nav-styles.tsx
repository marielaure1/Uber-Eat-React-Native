import { StyleSheet } from 'react-native';

const navStyles = StyleSheet.create({
    nav:{
        padding: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'spaceBetween',
        gap: 30
    },
    part1: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    iconBurger: {
      fontSize: 24,
      fontWeight: '600',
    },
    logo: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    }
});

export default navStyles;