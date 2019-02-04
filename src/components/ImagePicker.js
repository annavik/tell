import { colors } from '../config/colors'
import { PlusIcon } from './PlusIcon'
import PropTypes from 'prop-types'
import React from 'react'
import { typography } from '../config/typography'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export class ImagePicker extends React.Component {
  static propTypes = {
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    aspectRatio: PropTypes.number.isRequired,
    label: PropTypes.string,
  }

  render() {
    const { width, aspectRatio, label } = this.props

    const containerStyle = {
      ...styles.container,
      width: width,
      aspectRatio: aspectRatio,
    }

    return (
      <TouchableOpacity style={containerStyle} activeOpacity={0.8}>
        {label && <Text style={styles.label}>{label}</Text>}
        <PlusIcon />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.accentLight,
  },
  label: {
    ...typography.labelLarge,
    marginBottom: 16,
  },
})
