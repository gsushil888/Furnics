import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalStyle from '../utils/GlobalStyle'

const Shop = () => {
  return (
    <View style={[{ backgroundColor: 'green' }, GlobalStyle.centered_item]}>
      <Text style={GlobalStyle.big_text}>Shop</Text>
    </View>
  )
}

export default Shop

const styles = StyleSheet.create({})