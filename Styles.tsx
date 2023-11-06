// import tabsStyles from './src/assets/styles/components/layout/tabs-styles.tsx';
// import navStyles from './src/assets/styles/components/layout/nav-styles.tsx';
// import homeStyles from './src/assets/styles/pages/home-styles.tsx';
// import cardsStyles from './src/assets/styles/components/cards/cards-styles.tsx';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   home:{
    backgroundColor: 'white'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: "black",
    marginBottom: 20
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
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
    top: 10,
    backgroundColor: 'rgb(14, 131, 69)',
    padding: 4,
    borderRadius: 0, 
    zIndex: 20
  },
  promoTextContent: {
    fontSize: 14,
    color: '#FFF'
  },
  star: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  iconStar: {
    color: '#FFF',
    fontSize: 20,
  },
  img: {
    flex: 1,
    aspectRatio: 2,
  },
  name: {
    fontSize: 20,
    lineHeight: 24,
    padding: 2,
    fontWeight: '500',
    color: '#000'
  },
  promoText: {
    color: 'rgb(14, 131, 69)',
    fontSize: 20,
  },
  note: {
    fontSize: 12,
    borderRadius: 14,
    height: 28,
    width: 28,
    backgroundColor: '#EEEEEE',
    fontWeight: '500',
    padding: 4
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 250
  },
  deliveryIcon: {
    width: 14,
    height: 14,
    marginRight: 6,
    
  },
  section: {
    padding: 20
  },
    enseignesInfo:{
        flexDirection: 'row'
    },
    cardImage:{
        width: 100
    },
    imgContainerCategory:{
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'center',
        aspectRatio: 1/1,
    },
    imgCategory:{
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'center'
    },
    nameCategory:{
        fontSize: 16,
        padding: 2,
        fontWeight: '500',
        color: '#000',
        textAlign: 'center'
    },
    categoryInfo: {
        width: '100%'
    },
    cardProduct: {
        width: 150
    },
    imgContainerProduct:{
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'center',
        aspectRatio: 1/1,
    },
    imgProduct: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'center'
    },
    productInfo: {
        width: '100%',
    },
    productInfoRow: {
        width: '100%',
        flexDirection: 'row'
    },
    nameProduct: {
        fontSize: 16,
        padding: 2,
        fontWeight: '500',
        color: '#000',
    },
    priceProduct: {
        fontSize: 12,
        fontWeight: '500',
        color: '#000',
        paddingRight: 10
    },
    poidProduct: {
        fontSize: 12,
        color: '#000',
        paddingRight: 10
    },
    calProduct: {
        fontSize: 12,
        color: '#000'
    },
    buttonsQuantity:{
        position: 'absolute',
        bottom: 0,
        right: 0,
        flexDirection: 'row',
        gap: 10,
        elevation: 3,
        borderRadius: 20,
        shadowColor: 'black', // Pour iOS
        shadowOffset: { width: 1, height: 1 }, // Pour iOS
        shadowOpacity: 0.2, // Pour iOS
        shadowRadius: 1, // Pour iOS
        borderColor: "black",
        backgroundColor: 'white',
    },
    buttonQuantity: {
        height: 40,
        width: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonQuantityText:{
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
    }
});

export default styles;