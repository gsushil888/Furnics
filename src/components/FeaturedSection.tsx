import { Image, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GlobalStyle from '../utils/GlobalStyle'
import { FlatList } from 'react-native-gesture-handler'
import ProductCard from './ProductCard'
import Feather from 'react-native-vector-icons/Feather'

const productItems = [
    { name: 'Black Sofa set', price: '$200', image: require('../assets/images/product-item1.jpg') },
    { name: 'Circle dining table', price: '$200', image: require('../assets/images/product-item2.jpg') },
    { name: 'Minimal Sofa', price: '$200', image: require('../assets/images/product-item3.jpg') },
    { name: 'Pattern tea table', price: '$200', image: require('../assets/images/product-item4.jpg') },
    { name: 'Black Sofa set', price: '$200', image: require('../assets/images/product-item5.jpg') },
    { name: 'Minimal Sofa', price: '$200', image: require('../assets/images/product-item6.jpg') },
]

const FeaturedSection = () => {
    return (
        <View style={styles.featured_section}>
            <Text style={GlobalStyle.sectionTitle}>Our Featured products</Text>

            <Pressable
                style={({ pressed }) => [styles.shopAllBtn,
                pressed ? { borderColor: '#00f', borderWidth: 1, color: '#fff' } : null
                ]}>
                <View style={GlobalStyle.row_container}>
                    <Text style={styles.text}>Shop All</Text>
                    <Feather name='arrow-right' color={'black'} size={18} />
                </View>
            </Pressable>

            <FlatList
                data={productItems}
                horizontal={true}
                renderItem={
                    ({ item }) => (<ProductCard items={item} />)
                }
                style={{}}
            />
        </View>
    )
}

export default FeaturedSection

const styles = StyleSheet.create({

    featured_section: {
        flex: 1,
        paddingHorizontal: 10,
        marginBottom:50,
    },
    shopAllBtn: {
        width: 200,
        height: 60,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    section_title: {

    },
    text: {
        color: 'black',
        fontFamily: 'Poppins-Light',
        fontSize: 18,
        textTransform: 'uppercase',
        letterSpacing: 1.6
    }
})