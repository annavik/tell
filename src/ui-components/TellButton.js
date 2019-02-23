import { colors } from '../config/colors'
import PropTypes from 'prop-types'
import React from 'react'
import { typography } from '../config/typography'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export class TellButton extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.object,
    labelStyle: PropTypes.object,
    onPress: PropTypes.func.isRequired,
  }

  render() {
    const { title, style, labelStyle, onPress } = this.props

    return (
      <TouchableOpacity
        style={{ ...baseStyles.button, ...style }}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text style={{ ...baseStyles.label, ...labelStyle }}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

const baseStyles = StyleSheet.create({
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 32,
    paddingLeft: 32,
    height: 44,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  label: {
    ...typography.labelMedium,
    color: colors.white,
  },
})

export const buttonSizes = StyleSheet.create({
  tiny: {
    width: 'auto',
    height: 32,
    borderRadius: 16,
    paddingRight: 16,
    paddingLeft: 16,
  },
  small: {
    width: 'auto',
    height: 44,
    borderRadius: 22,
  },
  medium: {
    width: '100%',
    height: 44,
    borderRadius: 4,
  },
  large: {
    width: '100%',
    height: 52,
    borderRadius: 4,
  },
})

export const buttonThemes = StyleSheet.create({
  solid: {
    backgroundColor: colors.primary,
  },
  border: {
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: 'transparent',
  },
})
