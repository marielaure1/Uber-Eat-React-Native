import { View, Text, Image, TouchableHighlight, ScrollView } from 'react-native';
import styles from '../../../Styles.tsx';
import CardCategory from '../card/CardCategory.tsx';
import CategoryData from '../../../data/CategoryData.json';
import { useState, useEffect } from "react";

export default function SliderFilter() {
    const [activeFilters, setActiveFilters] = useState([]);

    const toggleFilter = (filter) => {
        if (activeFilters.includes(filter)) {
            setActiveFilters(activeFilters.filter((item) => item !== filter));
        } else {
            setActiveFilters([...activeFilters, filter]);
        }
    };

    const isFilterActive = (filter) => {
        return activeFilters.includes(filter);
    };
  
  return (
        <View style={[styles.section, styles.sectionSm]}> 
            <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} style={[styles.list, styles.filterContainer]}>
                <TouchableHighlight underlayColor="transparent" style={[styles.filterBtn, isFilterActive('UberOne') && styles.filterBtnSelect]} onPress={() => toggleFilter('UberOne')}>
                    <View style={styles.filterBtnContainer}>
                        <Image source={isFilterActive('UberOne') ? require('../../assets/icons/uber_one_white.png') : require('../../assets/icons/uber_one_black.png')} style={styles.filterBtnImg}/>   
                        <Text style={[styles.filterBtnText, isFilterActive('UberOne') && styles.filterBtnTextSelect]}>Uber One</Text> 
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor="transparent" style={[styles.filterBtn, isFilterActive('Offres') && styles.filterBtnSelect]} onPress={() => toggleFilter('Offres')}>
                    <View style={styles.filterBtnContainer}>
                        <Image source={isFilterActive('Offres') ? require('../../assets/icons/offres-white.png') : require('../../assets/icons/offres.png')} style={styles.filterBtnImg}/>   
                        <Text style={[styles.filterBtnText, isFilterActive('Offres') && styles.filterBtnTextSelect]}>Offres</Text> 
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor="transparent" style={[styles.filterBtn, isFilterActive('Note') && styles.filterBtnSelect]} onPress={() => toggleFilter('Note')}>
                    <View style={styles.filterBtnContainer}>
                        <Text style={[styles.filterBtnText, isFilterActive('Note') && styles.filterBtnTextSelect]}>Note</Text> 
                        <Image source={isFilterActive('Note') ? require('../../assets/icons/arrow-down-white.png') : require('../../assets/icons/arrow-down.png')} style={styles.filterBtnImgArrow}/>   
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor="transparent" style={[styles.filterBtn, isFilterActive('minutes') && styles.filterBtnSelect]} onPress={() => toggleFilter('minutes')}>
                    <View style={styles.filterBtnContainer}>
                        <Text style={[styles.filterBtnText, isFilterActive('minutes') && styles.filterBtnTextSelect]}>Moins de 30 minutes</Text>   
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor="transparent" style={[styles.filterBtn, isFilterActive('Prix') && styles.filterBtnSelect]} onPress={() => toggleFilter('Prix')}>
                    <View style={styles.filterBtnContainer}>
                        <Text style={[styles.filterBtnText, isFilterActive('Prix') && styles.filterBtnTextSelect]}>Prix</Text> 
                        <Image source={isFilterActive('Prix') ? require('../../assets/icons/arrow-down-white.png') : require('../../assets/icons/arrow-down.png')} style={styles.filterBtnImgArrow}/>   
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor="transparent" style={[styles.filterBtn, isFilterActive('Titres') && styles.filterBtnSelect]} onPress={() => toggleFilter('Titres')}>
                    <View style={styles.filterBtnContainer}>
                        <Text style={[styles.filterBtnText, isFilterActive('Titres') && styles.filterBtnTextSelect]}>Titres-restaurant</Text> 
                        <Image source={isFilterActive('Titres') ? require('../../assets/icons/arrow-down-white.png') : require('../../assets/icons/arrow-down.png')} style={styles.filterBtnImgArrow}/>   
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor="transparent" style={[styles.filterBtn, isFilterActive('mieux') && styles.filterBtnSelect]} onPress={() => toggleFilter('mieux')}>
                    <View style={styles.filterBtnContainer}>
                        <Text style={[styles.filterBtnText, isFilterActive('mieux') && styles.filterBtnTextSelect]}>Les mieux notés</Text>   
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor="transparent" style={[styles.filterBtn, isFilterActive('Diététique') && styles.filterBtnSelect]} onPress={() => toggleFilter('Diététique')}>
                    <View style={styles.filterBtnContainer}>
                        <Text style={[styles.filterBtnText, isFilterActive('Diététique') && styles.filterBtnTextSelect]}>Diététique</Text> 
                        <Image source={isFilterActive('Diététique') ? require('../../assets/icons/arrow-down-white.png') : require('../../assets/icons/arrow-down.png')} style={styles.filterBtnImgArrow}/>   
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor="transparent" style={[styles.filterBtn, isFilterActive('Trier') && styles.filterBtnSelect]} onPress={() => toggleFilter('Trier')}>
                    <View style={styles.filterBtnContainer}>
                        <Text style={[styles.filterBtnText, isFilterActive('Trier') && styles.filterBtnTextSelect]}>Trier</Text> 
                        <Image source={isFilterActive('Trier') ? require('../../assets/icons/arrow-down-white.png') : require('../../assets/icons/arrow-down.png')} style={styles.filterBtnImgArrow}/>   
                    </View>
                </TouchableHighlight>
            </ScrollView>
        </View>
    )
}