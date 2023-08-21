import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import GlobalStyle from '../utils/GlobalStyle'
import ArticleCards from './ArticleCards'

const items = [
    { title: 'BEST LOOKING INTERIOR THINGS FOR BEDROOMS', desc: 'Enim ut nunc, ultrices mauris felis viverra amet. Ante sed dictum nisi suscipit ac ut faucibus pretium interdum.', image: require('../assets/images/post-item1.jpg') },
    { title: 'TRENDING MODERN FURNITURE DESIGN IN 2022', desc: 'Enim ut nunc, ultrices mauris felis viverra amet. Ante sed dictum nisi suscipit ac ut faucibus pretium interdum.', image: require('../assets/images/post-item2.jpg') },
    { title: 'WHY IS SIMPLE FIRNITURE DESIGN LOOKS FABULOUS', desc: 'Enim ut nunc, ultrices mauris felis viverra amet. Ante sed dictum nisi suscipit ac ut faucibus pretium interdum.', image: require('../assets/images/post-item3.jpg') },
]

const ArticlesSection = () => {
    return (
        <View style={styles.featured_section}>
            <Text style={GlobalStyle.sectionTitle}>Read our &nbsp;articles</Text>
            <Pressable
                style={({ pressed }) => [styles.see_all,
                pressed ? { borderColor: '#00f', borderWidth: 3, color: '#fff', } : null
                ]}>

                <Text style={styles.text}>See All Articles</Text>
                <Feather name='arrow-right' color={'black'} size={18} />

            </Pressable>

            <ArticleCards items={items} />
        </View>

    )
}

export default ArticlesSection

const styles = StyleSheet.create({
    featured_section: {
        flex: 1,
        paddingHorizontal: 10,
        marginBottom: 50,
    },
    see_all: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        gap: 15,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    text: {
        color: 'black',
        fontFamily: 'Poppins-Light',
        fontSize: 18,
        textTransform: 'uppercase',
        letterSpacing: 1.6
    }
})