import { colors } from '../config/colors'
import PropTypes from 'prop-types'
import React from 'react'
import { typography } from '../config/typography'
import { StyleSheet, TextInput, View } from 'react-native'

export class TellTextArea extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    onChangeText: PropTypes.func,
  }

  render() {
    const { placeholder, maxLength, onChangeText } = this.props

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textArea}
          placeholder={placeholder}
          placeholderTextColor={colors.darkGrey}
          maxLength={maxLength}
          multiline
          onChangeText={onChangeText}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.accentLight,
    padding: 16,
  },
  textArea: {
    flex: 1,
    color: colors.black,
    padding: 0,
    margin: 0,
    ...typography.paragraph,
  },
})
