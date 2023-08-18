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



const AboutSection = ({ navigations }: any) => {
    return (
        <View style={styles.about_section}>

            <View style={styles.about_section_container}>

                <View style={styles.image_container}>
                    <Image style={styles.image} source={require('../assets/images/single-image1.jpg')} />
                </View>

                <View style={styles.text_container}>
                    <Text style={GlobalStyle.sectionTitle}>About Us</Text>
                    <Text style={styles.text}>Ac varius lectus tellus tellus quisque tristique aenean. Volutpat velit nulla eu iaculis risus in urna. Eu morbi vel purus velit dui vel egestas purus sed. Eget turpis tincidunt faucibus montes arcu in nullam tortor orci. Nulla tellus sed purus vestibulum sagittis pretium donec nec mattis ollis porta sit ut.</Text>
                    <Text style={styles.text}>Facilisi ut vulputate volutpat a aliquet. Facilisis sed quis pretium amet hac. Justo tristique sagittis sodales viverra venenatis integer fringilla.</Text>

                    <Pressable
                        onPress={() => navigations.navigate('AboutUs')}
                        style={({ pressed }) => [styles.about_us_btn,
                        { backgroundColor: pressed ? '#fff' : 'transparent', }]
                        }
                    >
                        <Text style={styles.about_us_text}>About Us</Text>
                        <Feather name='arrow-right' color={'black'} size={24} />
                    </Pressable>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    about_section: {
        marginBottom:40,
    },
    about_section_container: {
        flexDirection: 'column',
        gap: 30,
    },
    image_container: {
        paddingHorizontal: 15
    },
    image: {
        width: '100%',
        height: 400
    },
    text_container: {
        paddingHorizontal: 20
    },
    text: {
        color: 'black',
        fontFamily: 'Poppins-Light',
        fontSize: 22,
        marginBottom: 20
    },
    about_us_btn: {
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        gap: 20,
        marginTop: 20,
        marginBottom: 20,
        width: 200,
        height: 70,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    about_us_text: {
        color: 'black',
        fontSize: 20,
        letterSpacing: 1.6,
        textTransform: 'uppercase'
    }

})

export default AboutSection

