import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Header = ({ navigations }: any) => {
    return (
        <View style={styles.header}>
            <Image
                source={require('../assets/images/main-logo.png')}
                resizeMode='contain' />
            <Icon name='menu' size={40} color={"black"}
                onPress={() => { navigations.openDrawer() }} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        paddingTop: 20,
        marginBottom: 80,
    },


})

export default Header;