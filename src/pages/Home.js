import { colors } from '../config/colors'
import PropTypes from 'prop-types'
import React from 'react'
import { TellButton } from '../components/TellButton'
import { UserInfo } from '../components/UserInfo'
import { Image, ImageBackground, StyleSheet, View } from 'react-native'

const bg = require('../../assets/images/bg_home.jpg')
const logo = require('../../assets/images/logo_small.png')

export class Home extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  static navigationOptions = {
    title: 'Hem',
    header: null,
  }

  render() {
    return (
      <ImageBackground source={bg} style={styles.background}>
        <UserInfo />
        <View style={styles.main}>
          <TellButton
            title="Mina böcker"
            size="large"
            onPress={() => this.props.navigation.navigate('MyBooks')}
          />
          <View style={styles.space} />
          <TellButton
            title="Bibliotek"
            backgroundColor={colors.white}
            color={colors.black}
            size="large"
            onPress={() => {}}
          />
          <View style={styles.space} />
          <TellButton
            title="Profil"
            backgroundColor={colors.white}
            color={colors.black}
            size="large"
            onPress={() => {}}
          />
          <View style={styles.space} />
          <TellButton
            title="Logga ut"
            backgroundColor={colors.white}
            color={colors.black}
            size="large"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <View style={styles.bottom}>
          <Image source={logo} />
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  top: {
    backgroundColor: colors.primary,
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
