import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import GlobalStyle from '../utils/GlobalStyle'
import ProductCard from './ProductCard'


const trendingProducts = [
    { name: 'Black Sofa set', price: '$200', image: require('../assets/images/product-item1.jpg') },
    { name: 'Circle dining table', price: '$200', image: require('../assets/images/product-item2.jpg') },
    { name: 'Minimal Sofa', price: '$200', image: require('../assets/images/product-item3.jpg') },
    { name: 'Pattern tea table', price: '$200', image: require('../assets/images/product-item4.jpg') },
    { name: 'Black Sofa set', price: '$200', image: require('../assets/images/product-item5.jpg') },
    { name: 'Minimal Sofa', price: '$200', image: require('../assets/images/product-item6.jpg') },
]

const TrendingProducts = () => {
    return (
        <View style={styles.trending_section}>
            <View style={styles.trending_header}>
                <Text style={[GlobalStyle.sectionTitle, { marginLeft: 10 }]}>Trending products</Text>
                <Pressable
                    style={({ pressed }) => [styles.shop_all_btn,
                    pressed ? { borderColor: '#00f', borderWidth: 1, color: '#fff', backgroundColor: '#fff' } : null
                    ]}>

                    <Text style={styles.text}>Shop All</Text>
                    <Feather name='arrow-right' color={'black'} size={18} />

                </Pressable>
            </View>

            <FlatList
                data={trendingProducts}
                horizontal={true}
                renderItem={
                    ({ item }) => (<ProductCard items={item} />)
                }
                style={{}}
            />
        </View>
    )
}

export default TrendingProducts

const styles = StyleSheet.create({
    trending_section: {
        flex: 1,
        marginBottom: 50,
        paddingVertical:20
    },
    trending_header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    shop_all_btn: {
        width: 150,
        flexDirection: 'row',
        padding: 15,
        marginRight: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderWidth: 1
    },
    text: {
        color: 'black',
        fontFamily: 'Poppins-Light',
        fontSize: 18,
        textTransform: 'uppercase',
        letterSpacing: 1.6
    }
})