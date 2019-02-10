import { colors } from '../config/colors'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const icon = require('../../assets/images/icon_check.png')

export class CheckIcon extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={icon} style={styles.icon} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 16,
    height: 16,
  },
})
