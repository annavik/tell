import React from 'react'
import { TellButton } from '../components/TellButton'
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'

const bg = require('../../assets/images/bg_home.jpg')
const logo = require('../../assets/images/logo_small.png')

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  top: {
    backgroundColor: '#FC6E51',
    height: 120,
  },
  main: {
    flexGrow: 1,
    padding: 32,
    justifyContent: 'center',
  },
  bottom: {
    padding: 32,
    alignItems: 'center',
  },
  space: {
    height: 16,
  },
})

export class Home extends React.Component {
  render() {
    return (
      <ImageBackground source={bg} style={styles.background}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.top} />
        <View style={styles.main}>
          <TellButton title="Mina böcker" size="large" onPress={() => {}} />
          <View style={styles.space} />
          <TellButton
            title="Bibliotek"
            backgroundColor="#FFFFFF"
            color="#434A54"
            size="large"
            onPress={() => {}}
          />
          <View style={styles.space} />
          <TellButton
            title="Profil"
            backgroundColor="#FFFFFF"
            color="#434A54"
            size="large"
            onPress={() => {}}
          />
          <View style={styles.space} />
          <TellButton
            title="Logga ut"
            backgroundColor="#FFFFFF"
            color="#434A54"
            size="large"
            onPress={() => {}}
          />
        </View>
        <View style={styles.bottom}>
          <Image source={logo} />
        </View>
      </ImageBackground>
    )
  }
}
