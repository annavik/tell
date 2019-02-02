import { colors } from '../config/colors'
import PropTypes from 'prop-types'
import React from 'react'
import { TellButton } from '../components/TellButton'
import { TellTextInput } from '../components/TellTextInput'
import { typography } from '../config/typography'
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

const bg = require('../../assets/images/bg_login.jpg')
const logo = require('../../assets/images/logo.png')

export class Login extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  static navigationOptions = {
    title: 'Logga in',
    header: null,
  }

  render() {
    return (
      <ImageBackground source={bg} style={styles.background}>
        <View style={styles.main}>
          <KeyboardAvoidingView behavior="position">
            <View style={styles.mainContent}>
              <Image source={logo} style={styles.logo} />
              <TellTextInput placeholder="E-post" />
              <TellTextInput placeholder="Lösenord" />
              <TellButton
                title="Logga in"
                size="large"
                onPress={() => this.props.navigation.navigate('Home')}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.label}>Ny användare?</Text>
          <TellButton
            title="Registrera dig gratis"
            theme="border"
            onPress={() => this.props.navigation.navigate('CreateAccount')}
          />
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
  main: {
    flexGrow: 1,
    padding: 32,
    justifyContent: 'center',
  },
  bottom: {
    padding: 32,
    alignItems: 'center',
  },
  mainContent: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  },
  logo: {
    marginBottom: 64,
  },
  label: {
    ...typography.labelSmall,
    color: colors.white,
    marginBottom: 8,
  },
})
