import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  button: {
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FC6E51',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 32,
    paddingLeft: 32,
    marginBottom: 16,
  },
  label: {
    color: '#FFFFFF',
  },
})

export class TellButton extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    size: PropTypes.string,
  }

  render() {
    const { title, onPress, size } = this.props

    let buttonStyle = styles.button

    switch (size) {
      case 'small':
        break
      case 'medium':
        buttonStyle = {
          ...buttonStyle,
          width: '100%',
          height: 44,
          borderRadius: 4,
        }
        break
      case 'large':
        buttonStyle = {
          ...buttonStyle,
          width: '100%',
          height: 52,
          borderRadius: 4,
        }
        break
    }

    return (
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Text style={styles.label}>{title}</Text>
      </TouchableOpacity>
    )
  }
}
