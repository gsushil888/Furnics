import { Image, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GlobalStyle from '../utils/GlobalStyle'
import { deviceHeight, deviceWidth } from './Dimension'
import { FlatList } from 'react-native-gesture-handler'
import ProductCard from './ProductCard'

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
        <View style={{ flex: 1 }}>
            <Text style={GlobalStyle.sectionTitle}>
                Our Featured products
            </Text>
            <Pressable
                style={({ pressed }) => [styles.shopAllBtn,
                pressed ? { borderColor: '#00f', borderWidth: 1, color: '#fff' } : null
                ]}>
                <Text style={GlobalStyle.text}>Shop All</Text>

            </Pressable>
            <FlatList
                data={productItems}
                horizontal={true}
                renderItem={
                    ({ item }) => (<ProductCard items={item} />)
                }
                style={{ margin: 10 }}
            />



        </View>
    )
}

export default FeaturedSection

const styles = StyleSheet.create({
    shopAllBtn: {
        width: 200,
        height: 70,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginBottom: 30

    },
    text: {

    }
})