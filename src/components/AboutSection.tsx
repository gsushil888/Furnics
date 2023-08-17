import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import GlobalStyle from '../utils/GlobalStyle'



const AboutSection = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.aboutSectionContainer}>

                <View style={{ margin: 10, }}>
                    <Image style={{ width: '100%', height: 400 }} source={require('../assets/images/single-image1.jpg')} />
                </View>

                <View style={{ padding: 30 }}>
                    <Text style={GlobalStyle.sectionTitle}>
                        About Us
                    </Text>
                    <Text style={styles.text}>
                        Ac varius lectus tellus tellus quisque tristique aenean. Volutpat velit nulla eu iaculis risus in urna. Eu morbi vel purus velit dui vel egestas purus sed. Eget turpis tincidunt faucibus montes arcu in nullam tortor orci. Nulla tellus sed purus vestibulum sagittis pretium donec nec mattis ollis porta sit ut.
                    </Text>
                    <Text style={styles.text}>
                        Facilisi ut vulputate volutpat a aliquet. Facilisis sed quis pretium amet hac. Justo tristique sagittis sodales viverra venenatis integer fringilla.
                    </Text>
                    <Pressable
                        style={({ pressed }) => [
                            { backgroundColor: pressed ? '#fff' : 'transparent', }, styles.aboutUsBtn]
                        }
                    >
                        <Text style={
                            styles.aboutUsText
                        }>About Us</Text>
                        <Feather name='arrow-right' color={'black'} size={24} />
                    </Pressable>

                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    wrapper: {
        // margin: 10
    },
    aboutSectionContainer: {
        flexDirection: 'column',
        gap: 60
    },

    text: {
        color: 'black',
        fontFamily: 'Poppins-Light',
        fontSize: 22,
        marginBottom: 20
    },
    aboutUsBtn: {
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        gap: 20,
        
        marginTop: 20,
        width: 200,
        height: 70,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    aboutUsText: {
        color: 'black',
        fontSize: 22,
        textTransform: 'uppercase'
    }


})

export default AboutSection

