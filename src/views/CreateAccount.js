import { colors } from '../config/colors'
import React from 'react'
import { showAlert } from '../utils/showAlert'
import { signUp } from '../utils/auth'
import { TellButton } from '../ui-components/TellButton'
import { textInputStyles } from '../config/styles'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export class CreateAccount extends React.Component {
  static navigationOptions = {
    title: 'Skapa konto',
  }

  state = {
    email: '',
    password: '',
    passwordRepeat: '',
  }

  async signUp() {
    const { email, password, passwordRepeat } = this.state

    if (email.length === 0) {
      showAlert('E-post saknas.')

      return
    }

    if (password.length < 6) {
      showAlert('Lösenordet måste vara minst 6 tecken.')

      return
    }

    if (password !== passwordRepeat) {
      showAlert('Lösenorden matchar inte.')

      return
    }

    try {
      await signUp(email, password)
    } catch {
      showAlert(
        'Kontot kunde inte skapas.',
        'Kontrollera att du har använt en giltig e-postadress.'
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.inputFields}>
            <Text style={textInputStyles.textInputLabel}>E-post</Text>
            <TextInput
              returnKeyType="next"
              keyboardType="email-address"
              autoCapitalize="none"
              style={textInputStyles.textInputBorder}
              placeholderTextColor={colors.darkGrey}
              onChangeText={text => this.setState({ email: text })}
              onSubmitEditing={() => this.passwordInput.focus()}
            />

            <Text style={textInputStyles.textInputLabel}>Lösenord</Text>
            <TextInput
              returnKeyType="next"
              secureTextEntry
              style={textInputStyles.textInputBorder}
              placeholderTextColor={colors.darkGrey}
              onChangeText={text => this.setState({ password: text })}
              onSubmitEditing={() => this.passwordRepeatInput.focus()}
              ref={input => (this.passwordInput = input)}
            />

            <Text style={textInputStyles.textInputLabel}>Upprepa lösenord</Text>
            <TextInput
              returnKeyType="go"
              secureTextEntry
              style={textInputStyles.textInputBorder}
              placeholderTextColor={colors.darkGrey}
              onChangeText={text => this.setState({ passwordRepeat: text })}
              onSubmitEditing={() => this.signUp()}
              ref={input => (this.passwordRepeatInput = input)}
            />
          </View>
          <TellButton
            title="Skapa konto"
            size="medium"
            onPress={() => this.signUp()}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 32,
    flex: 1,
  },
  inputFields: {
    flexGrow: 1,
  },
})
