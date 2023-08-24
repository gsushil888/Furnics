import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalStyle from '../utils/GlobalStyle'

const Pages = () => {
  return (
    <View style={[{backgroundColor:'blue'},GlobalStyle.centered_item]}>
      <Text style={GlobalStyle.big_text}>Pages</Text>
    </View>
  )
}

export default Pages

const styles = StyleSheet.create({})