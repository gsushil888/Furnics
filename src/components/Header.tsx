import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Header = ({ navigations }: any) => {
    return (
        <View style={styles.header}>
            <View style={styles.header_container}>
                <Image
                    source={require('../assets/images/main-logo.png')}
                    resizeMode='contain' />
                <Icon name='menu' size={40} color={"black"}
                    onPress={() => { navigations.openDrawer() }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 80,
    },
    header_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginHorizontal: 40,
    }


})

export default Header;