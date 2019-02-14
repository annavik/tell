import { colors } from '../config/colors'
import PropTypes from 'prop-types'
import React from 'react'
import { sharedStyles } from '../config/sharedStyles'
import { showAlert } from '../utils/showAlert'
import { signIn } from '../utils/auth'
import { TellButton } from '../components/TellButton'
import { typography } from '../config/typography'
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
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

  state = {
    email: '',
    password: '',
  }

  async signIn() {
    const { email, password } = this.state

    if (email.length === 0) {
      showAlert('E-post saknas.')

      return
    }

    if (password.length === 0) {
      showAlert('Lösenord saknas.')

      return
    }

    try {
      await signIn(email, password)
    } catch {
      showAlert('Det gick inte att logga in.')
    }
  }

  render() {
    return (
      <ImageBackground source={bg} style={styles.background}>
        <View style={styles.main}>
          <KeyboardAvoidingView behavior="position">
            <View style={styles.mainContent}>
              <Image source={logo} style={styles.logo} />

              <TextInput
                placeholder="E-post"
                returnKeyType="next"
                keyboardType="email-address"
                autoCapitalize="none"
                style={sharedStyles.textInputPlain}
                placeholderTextColor={colors.darkGrey}
                onChangeText={text => this.setState({ email: text })}
                onSubmitEditing={() => this.passwordInput.focus()}
              />

              <TextInput
                placeholder="Lösenord"
                returnKeyType="go"
                secureTextEntry
                style={sharedStyles.textInputPlain}
                placeholderTextColor={colors.darkGrey}
                onChangeText={text => this.setState({ password: text })}
                onSubmitEditing={() => this.signIn()}
                ref={input => (this.passwordInput = input)}
              />

              <TellButton
                title="Logga in"
                size="large"
                onPress={() => this.signIn()}
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
    flex: 1,
  },
  main: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
  },
  mainContent: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  },
  logo: {
    marginBottom: 64,
  },
  bottom: {
    padding: 32,
    alignItems: 'center',
  },
  label: {
    ...typography.labelSmall,
    color: colors.white,
    marginBottom: 8,
  },
})
