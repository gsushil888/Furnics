import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const servicesItem = [
    { name: 'Quick Delivery', icon: 'bus-outline' },
    { name: 'Pick Up in Store', icon: 'cart-outline' },
    { name: 'Special Pacakaging', icon: 'gift-outline' },
    { name: 'Return & Refund Policy', icon: 'reload-outline' },

]

const ServicesSection = () => {
    return (
        <View style={{ margin: 10 }}>
            <Items />
        </View>
    )
}

export const Items = () => {
    return (
        servicesItem.map((item, index) => (
            <View key={index} style={
                { paddingLeft: 10 }
            }>

                <View style={styles.rowBox} >
                    <View style={styles.roundedIconBox}>
                        <Ionicons name={item.icon} size={28} color={'black'} />
                    </View>
                    <View>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>

                </View>

            </View>
        ))
    )
}

export default ServicesSection

const styles = StyleSheet.create({
    rowBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginVertical: 10
    },
    roundedIconBox: {
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#787d62',
        padding: 20
    },
    text: {
        textTransform: 'uppercase',
        color: '#787d62',
        fontSize: 24,
        fontWeight: '100',
        fontFamily: 'Cinzel'
    }
})