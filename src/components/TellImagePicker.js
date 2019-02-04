import { colors } from '../config/colors'
import { pickImage } from '../helpers/imageHandler'
import { PlusIcon } from './PlusIcon'
import PropTypes from 'prop-types'
import React from 'react'
import { typography } from '../config/typography'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export class TellImagePicker extends React.Component {
  static propTypes = {
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    aspectRatio: PropTypes.number.isRequired,
    label: PropTypes.string,
    onImagePicked: PropTypes.func.isRequired,
  }

  onPickImagePress = async () => {
    const pickedImage = await pickImage()

    this.props.onImagePicked(pickedImage)
  }

  render() {
    const { width, aspectRatio, label } = this.props

    const containerStyle = {
      ...styles.container,
      width: width,
      aspectRatio: aspectRatio,
    }

    return (
      <TouchableOpacity
        style={containerStyle}
        activeOpacity={0.8}
        onPress={this.onPickImagePress}
      >
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
