import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  button: {
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FC6E51',
    borderColor: '#FFFFFF',
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
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    theme: PropTypes.string,
    size: PropTypes.string,
  }

  getButtonStyles() {
    const { backgroundColor, color, size, theme } = this.props

    var buttonStyles = styles.button

    if (backgroundColor) {
      buttonStyles = { ...buttonStyles, backgroundColor }
    }

    if (color) {
      buttonStyles = { ...buttonStyles, borderColor: color }
    }

    switch (theme) {
      case 'solid':
        break
      case 'border':
        buttonStyles = {
          ...buttonStyles,
          backgroundColor: 'transparent',
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

  getLabelStyles() {
    const { color } = this.props

    var labelStyles = styles.label

    if (color) {
      labelStyles = { ...labelStyles, color }
    }

    return labelStyles
  }

  render() {
    const { title, onPress } = this.props
    let buttonStyles = this.getButtonStyles()
    let labelStyles = this.getLabelStyles()

    return (
      <TouchableOpacity
        style={buttonStyles}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Text style={labelStyles}>{title}</Text>
      </TouchableOpacity>
    )
  }
}
