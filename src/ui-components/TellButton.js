import { colors } from '../config/colors'
import PropTypes from 'prop-types'
import React from 'react'
import { typography } from '../config/typography'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export class TellButton extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    buttonStyles: PropTypes.object,
    labelStyles: PropTypes.object,
    onPress: PropTypes.func.isRequired,
  }

  render() {
    const { title, buttonStyles, labelStyles, onPress } = this.props

    return (
      <TouchableOpacity
        style={{ ...styles.button, ...buttonStyles }}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text style={{ ...styles.label, ...labelStyles }}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 32,
    paddingLeft: 32,
    height: 44,
    borderRadius: 4,
    backgroundColor: colors.primary,
    borderWidth: 0,
    borderColor: colors.white,
  },
  label: {
    ...typography.labelMedium,
    color: colors.white,
  },
})
