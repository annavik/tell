import React from 'react'
import { TellButton } from '../components/TellButton'
import { TellTextInput } from '../components/TellTextInput'
import { StyleSheet, View } from 'react-native'

export class CreateAccount extends React.Component {
  static navigationOptions = {
    title: 'Skapa konto',
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.inputFields}>
            <TellTextInput theme="border" label="E-post" />
            <TellTextInput theme="border" label="Lösenord" />
            <TellTextInput theme="border" label="Upprepa lösenord" />
          </View>
          <TellButton title="Skapa konto" size="medium" onPress={() => {}} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  content: {
    padding: 32,
    flexGrow: 1,
  },
  inputFields: {
    flexGrow: 1,
  },
})
