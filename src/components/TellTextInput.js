import { colors } from '../config/colors'
import PropTypes from 'prop-types'
import React from 'react'
import { typography } from '../config/typography'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export class TellTextInput extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    theme: PropTypes.string,
  }

  render() {
    const { label, placeholder, theme } = this.props

    let inputStyles

    switch (theme) {
      case 'border':
        inputStyles = {
          ...styles.textInput,
          ...styles.textInputBorder,
        }
        break
      case 'plain':
      default:
        inputStyles = {
          ...styles.textInput,
          ...styles.textInputPlain,
        }
        break
    }

    return label ? (
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={inputStyles} placeholder={placeholder} />
      </View>
    ) : (
      <TextInput style={inputStyles} placeholder={placeholder} />
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    backgroundColor: colors.white,
    color: colors.black,
    borderRadius: 4,
    paddingRight: 16,
    paddingLeft: 16,
    marginBottom: 16,
  },
  textInputPlain: {
    height: 52,
  },
  textInputBorder: {
    height: 44,
    borderWidth: 1,
    borderColor: colors.accentLight,
  },
  inputContainer: {
    marginBottom: 8,
  },
  label: {
    ...typography.labelSmall,
    marginBottom: 8,
  },
})