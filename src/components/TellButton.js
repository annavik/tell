import { colors } from '../config/colors'
import PropTypes from 'prop-types'
import React from 'react'
import { typography } from '../config/typography'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

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
    const { backgroundColor, color, theme, size } = this.props

    var buttonStyles = styles.button

    switch (theme) {
      case 'border':
        buttonStyles = {
          ...buttonStyles,
          ...styles.buttonBorder,
        }
        break
      case 'solid':
      default:
        buttonStyles = {
          ...buttonStyles,
          ...styles.buttonSolid,
        }
        break
    }

    switch (size) {
      case 'medium':
        buttonStyles = {
          ...buttonStyles,
          ...styles.buttonMedium,
        }
        break
      case 'large':
        buttonStyles = {
          ...buttonStyles,
          ...styles.buttonLarge,
        }
        break
      case 'small':
      default:
        buttonStyles = {
          ...buttonStyles,
          ...styles.buttonSmall,
        }
        break
    }

    if (backgroundColor) {
      buttonStyles = { ...buttonStyles, backgroundColor }
    }

    if (color) {
      buttonStyles = { ...buttonStyles, borderColor: color }
    }

    return buttonStyles
  }

  getLabelStyles() {
    const { color } = this.props

    return color ? { ...styles.label, color } : styles.label
  }

  render() {
    const { title, onPress } = this.props

    return (
      <TouchableOpacity
        style={this.getButtonStyles()}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text style={this.getLabelStyles()}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 32,
    paddingLeft: 32,
  },
  buttonSolid: {
    backgroundColor: colors.primary,
  },
  buttonBorder: {
    borderColor: colors.white,
    borderWidth: 1,
  },
  buttonSmall: {
    height: 44,
    borderRadius: 22,
  },
  buttonMedium: {
    width: '100%',
    height: 44,
    borderRadius: 4,
  },
  buttonLarge: {
    width: '100%',
    height: 52,
    borderRadius: 4,
  },
  label: {
    ...typography.labelMedium,
    color: colors.white,
  },
})
