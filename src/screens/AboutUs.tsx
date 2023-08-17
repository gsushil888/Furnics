import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalStyle from '../utils/GlobalStyle'

const AboutUs = () => {
  return (
    <View style={[{ backgroundColor: 'purple' }, GlobalStyle.centered_item]}>
      <Text style={GlobalStyle.big_text}>AboutUs</Text>
    </View>
  )
}

export default AboutUs

const styles = StyleSheet.create({})