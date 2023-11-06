import { StyleSheet } from 'react-native';

const cardsStyles = {
  card: {
    width: 300,
  },
  imgContainer: {
    aspectRatio: 2,
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  promo: {
    position: 'absolute',
    top: 20,
    backgroundColor: 'rgb(14, 131, 69)', // Utilisez la couleur appropriée
    fontSize: 14,
    padding: 4,
    color: '#FFF', // Utilisez la couleur appropriée
    borderRadius: 0, // Ajustez la forme
  },
  star: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  iconStar: {
    color: '#FFF', // Utilisez la couleur appropriée
    fontSize: 20,
  },
  img: {
    flex: 1,
    aspectRatio: 2,
  },
  name: {
    fontSize: 18,
    lineHeight: 24,
    padding: 2,
    fontWeight: '500',
    color: '#000', // Utilisez la couleur appropriée
  },
  promoText: {
    color: 'rgb(14, 131, 69)', // Utilisez la couleur appropriée
  },
  note: {
    fontSize: 12,
    borderRadius: 14,
    height: 28,
    width: 28,
    backgroundColor: '#EEEEEE', // Utilisez la couleur appropriée
    fontWeight: '500',
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryIcon: {
    width: 14,
    height: 14,
    marginRight: 6,
  },
};

export default cardsStyles;