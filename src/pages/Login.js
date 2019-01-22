import React from 'react'
import { TellTextInput } from '../components/TellTextInput'
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'

const bg = require('../../assets/images/bg_login.jpg')
const logo = require('../../assets/images/logo.png')

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
    padding: 32,
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 64,
  },
})

export class Login extends React.Component {
  render() {
    return (
      <ImageBackground source={bg} style={styles.background}>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <KeyboardAvoidingView
            style={styles.content}
            behavior="position"
            contentContainerStyle={styles.content}
          >
            <Image source={logo} style={styles.logo} />
            <TellTextInput placeholder="E-post" />
            <TellTextInput placeholder="Lösenord" />
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    )
  }
}
