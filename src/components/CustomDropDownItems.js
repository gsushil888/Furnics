import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'


// const menuItems = [
//     { title: 'Home', icon: 'caret-down-sharp', screen: 'Home' },
//     { title: 'About Us', icon: '', screen: 'AboutUs' },
//     { title: 'Shop', icon: 'caret-down-sharp', screen: 'Shop' },
//     { title: 'Blog', icon: 'caret-down-sharp', screen: 'Blog' },
//     { title: 'Pages', icon: 'caret-down-sharp', screen: 'Pages' },
//     { title: 'Log out', icon: 'log-out-outline', screen: 'Login' },
// ]




const CustomDropDownItems = (props) => {

    const handleLogout = async () => {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            console.log(error);
        }
        console.log("Data cleared from storage and navigating to Login Screen");
        props.navigation.navigate('Login')
    }

    return (


        // menuItems.map((item, index) => (
        //     <View key={index} style={styles.drawer_items}>
        //         <TouchableOpacity
        //             onPress={() => props.navigation.navigate(item.screen)}
        //         >
        //             <View style={styles.drawer_item_wrapper} >
        //                 <Text style={styles.text}>{item.title}</Text>
        //                 {
        //                     item.icon === '' ? null : <Ionicons name={item.icon} size={30} color={'black'} />
        //                 }
        //             </View>
        //         </TouchableOpacity> 
        //     </View>
        // ))



        <View>
            <View style={styles.drawer_items}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Home')}
                >
                    <View style={styles.drawer_item_wrapper} >
                        <Text style={styles.text}>Home</Text>
                        <Ionicons name={'caret-down-sharp'} size={30} color={'black'} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.drawer_items}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('AboutUs')}
                >
                    <View style={styles.drawer_item_wrapper} >
                        <Text style={styles.text}>About Us</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.drawer_items}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Blog')}
                >
                    <View style={styles.drawer_item_wrapper} >
                        <Text style={styles.text}>Blog</Text>
                        <Ionicons name={'caret-down-sharp'} size={30} color={'black'} />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.drawer_items}>

                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Pages')}
                >
                    <View style={styles.drawer_item_wrapper} >
                        <Text style={styles.text}>Pages</Text>
                        <Ionicons name={'caret-down-sharp'} size={30} color={'black'} />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.drawer_items}>
                <TouchableOpacity
                    onPress={handleLogout}
                >
                    <View style={styles.drawer_item_wrapper} >
                        <Text style={styles.text}>Log out</Text>
                        <Ionicons name={'log-out-outline'} size={30} color={'black'} />
                    </View>
                </TouchableOpacity>
            </View>


        </View>

    )
}

export default CustomDropDownItems

const styles = StyleSheet.create({
    drawer_items: {
        backgroundColor: '#fff',
        paddingStart: 30,
        paddingBottom: 20,

    },
    drawer_item_wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    text: {
        textTransform: 'uppercase',
        color: 'black',
        fontSize: 36,
        fontFamily: 'Poppins-Light'
    }
})