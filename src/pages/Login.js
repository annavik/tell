import React from 'react'
import { ImageBackground, StatusBar, StyleSheet } from 'react-native'

const bg = require('../../assets/images/bg_login.jpg')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
})

export class Login extends React.Component {
  render() {
    return (
      <ImageBackground source={bg} style={styles.container}>
        <StatusBar barStyle="light-content" />
      </ImageBackground>
    )
  }
}
