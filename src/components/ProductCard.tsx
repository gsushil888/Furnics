import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native'
import React from 'react'
import GlobalStyle from '../utils/GlobalStyle'
import { deviceHeight, deviceWidth } from './Dimension'

const ProductCard = ({ items }: any) => {
    return (
        <TouchableOpacity
            onPress={() => { }}
            style={
                {
                    marginRight: 30,
                   
                }
            }>
            <View style={{ width: deviceWidth / 2 }}>
                <View style={{ flexDirection: 'column', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <Image style={{ height: deviceHeight / 3 - 50, width: deviceWidth / 2 ,borderRadius:10}} source={items.image} />
                    <Text style={styles.nameText}>{items.name}</Text>
                    <Text style={styles.priceText}>{items.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    nameText: {
        color: '#787d62',
        fontFamily: 'Cinzel',
        fontSize: 28,
        marginTop: 10,
        letterSpacing: 2,
    },
    priceText: {
        color: '#787d62',
        fontFamily: 'Cinzel',
        fontSize: 22,
    }
})