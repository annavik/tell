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
  },
  label: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
})

export class TellButton extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    theme: PropTypes.string,
    size: PropTypes.string,
  }

  getButtonStyle() {
    const { size, theme } = this.props

    var buttonStyles = styles.button

    switch (theme) {
      case 'solid':
        break
      case 'border':
        buttonStyles = {
          ...buttonStyles,
          backgroundColor: 'transparent',
          borderColor: '#FFFFFF',
          borderWidth: 1,
        }
        break
    }

    switch (size) {
      case 'small':
        break
      case 'medium':
        buttonStyles = {
          ...buttonStyles,
          width: '100%',
          height: 44,
          borderRadius: 4,
        }
        break
      case 'large':
        buttonStyles = {
          ...buttonStyles,
          width: '100%',
          height: 52,
          borderRadius: 4,
        }
        break
    }

    return buttonStyles
  }

  render() {
    const { title, onPress } = this.props
    let buttonStyle = this.getButtonStyle()

    return (
      <TouchableOpacity
        style={buttonStyle}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Text style={styles.label}>{title}</Text>
      </TouchableOpacity>
    )
  }
}
