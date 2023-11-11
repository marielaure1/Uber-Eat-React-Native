// import tabsStyles from './src/assets/styles/components/layout/tabs-styles.tsx';
// import navStyles from './src/assets/styles/components/layout/nav-styles.tsx';
// import homeStyles from './src/assets/styles/pages/home-styles.tsx';
// import cardsStyles from './src/assets/styles/components/cards/cards-styles.tsx';
import { Dimensions, StyleSheet } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  home:{
    backgroundColor: 'white',
    padding: 0
  },
  scrollView: {
    height: windowHeight - 143
  },
  list:{
    paddingRight: 20
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
  // Card
  card: {
    width: 300,
    paddingRight: 20,
  },
  imgContainer: {
    width: '100%',
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
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 20,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  promoTextContent: {
    fontSize: 12,
    color: '#FFF'
  },
  star: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 10,
    width: 24,
    height: 24
  },
  iconStar: {
    width: '100%',
    height: '100%'
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  name: {
    fontSize: 16,
    lineHeight: 24,
    padding: 2,
    fontWeight: '500',
    color: '#000'
  },
  promoText: {
    color: 'rgb(14, 131, 69)',
    fontSize: 16,
    fontWeight: '500'
  },
  noteContainer : {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    height: 28,
    width: 28,
    backgroundColor: '#EEEEEE',
  },
  note: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000'
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 250,
    color: '#000'
  },
  deliveryIcon: {
    width: 14,
    height: 14,
    marginRight: 6,
  },
  section: {
    paddingBottom: 30
  },
  list: {
    paddingLeft: 20
  },
  enseignesInfo:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  // StyleCategory
  cardCategory:{
    width: 70
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
    objectFit: 'cover'
  },
  nameCategory:{
    fontSize: 12,
    padding: 2,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center'
  },
  categoryInfo: {
    width: '100%'
  },
  // StyleProduct
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
    objectFit: 'cover'
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
  // StyleQuantity
  buttonsQuantity:{
    position: 'absolute',
    bottom: 5,
    right: 5,
    flexDirection: 'row',
    gap: 10,
    elevation: 3,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 }, 
    shadowOpacity: 0.2,
    shadowRadius: 1,
    borderColor: "black",
    backgroundColor: 'white',
    minWidth: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fraisInfo: {
    color: '#000'
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
  },
  // Style Enseigne
  cardEnseigne: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 40
  },
  containerFooter:{
    position: 'absolute',
    bottom: 0,
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: '100%'
  },
  button: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 8,
    width: '100%'
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  imgCart:{
    width: 15,
    height: 15
  },
  buttonIcon: {
    width: 30,
    height: 30
  },
  buttonToggleMode: {
    flexDirection: "row",
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
    gap: 5
  },
  toggleMode: {
    borderRadius: 20,
    width: 40,
    height: 35,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
  },
  toggleModeBlack: {
    backgroundColor: 'black'
  },
  toggleModeWhite: {
    backgroundColor: 'transparent'
  },
  toggleModeImg: {
    width: 18,
    height: 18
  },
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
    height: '100%',
    width: '100%',
    paddingLeft: 10
  },
  searchImg:{
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
  },
  searchContainer: {
    width: '100%',
    height: 40,
    borderRadius: 20,
    paddingLeft: 10,
    backgroundColor: "#EEEEEE",
    color: '#000',
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default styles;