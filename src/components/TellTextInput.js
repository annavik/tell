import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: 52,
    backgroundColor: '#FFFFFF',
    color: '#434A54',
    borderRadius: 4,
    paddingRight: 16,
    paddingLeft: 16,
    marginBottom: 16,
  },
})

export class TellTextInput extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
  }

  render() {
    const { placeholder } = this.props

    return <TextInput style={styles.textInput} placeholder={placeholder} />
  }
}
