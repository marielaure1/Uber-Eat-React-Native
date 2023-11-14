import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Icon } from '@iconify/react';
import styles from '../../../Styles.tsx';

const CardAnnonce = () => {

    return (
        <>
            <TouchableHighlight underlayColor="transparent" onPress={() => {}}>
                <View style={styles.cardAnnonce}>
                    <View style={styles.imgContainerAnnonce}>
                        <Image source={require('../../assets/img/annonce/promo1.webp')} style={styles.img} />
                    </View>
                </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="transparent" onPress={() => {}}>
                <View style={styles.cardAnnonce}>
                    <View style={styles.imgContainerAnnonce}>
                        <Image source={require('../../assets/img/annonce/promo2.webp')} style={styles.img} />
                    </View>
                </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="transparent" onPress={() => {}}>
                <View style={styles.cardAnnonce}>
                    <View style={styles.imgContainerAnnonce}>
                        <Image source={require('../../assets/img/annonce/promo3.webp')} style={styles.img} />
                    </View>
                </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="transparent" onPress={() => {}}>
                <View style={styles.cardAnnonce}>
                    <View style={styles.imgContainerAnnonce}>
                        <Image source={require('../../assets/img/annonce/promo4.webp')} style={styles.img} />
                    </View>
                </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="transparent" onPress={() => {}}>
                <View style={styles.cardAnnonce}>
                    <View style={styles.imgContainerAnnonce}>
                        <Image source={require('../../assets/img/annonce/promo5.webp')} style={styles.img} />
                    </View>
                </View>
            </TouchableHighlight>
        </>
    );
};

export default CardAnnonce;