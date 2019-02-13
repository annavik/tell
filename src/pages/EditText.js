import { colors } from '../config/colors'
import React from 'react'
import { TellButton } from '../components/TellButton'
import { TellTextArea } from '../components/TellTextArea'
import { typography } from '../config/typography'
import { StyleSheet, Text, View } from 'react-native'

export class EditText extends React.Component {
  static navigationOptions = {
    title: 'Text',
  }

  state = {
    text: '',
    maxLength: 240,
  }

  render() {
    const { maxLength, text } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.message}>
          <Text style={typography.messageLabel}>
            Antal tecken: {text.length} av {maxLength}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <TellTextArea
            placeholder="Börja skriva!"
            maxLength={maxLength}
            onChangeText={text => {
              this.setState({
                ...this.state,
                text: text,
              })
            }}
          />
        </View>
        <TellButton title="Spara text" size="medium" onPress={() => {}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
    flex: 1,
  },
  message: {
    backgroundColor: colors.accentUltraLight,
    padding: 16,
    borderRadius: 4,
    marginBottom: 32,
    alignItems: 'center',
  },
  textContainer: {
    width: '100%',
    flexGrow: 1,
    marginBottom: 32,
  },
})
