import { colors } from '../config/colors'
import { pickImage } from '../utils/imageHandler'
import { PlusIcon } from './PlusIcon'
import PropTypes from 'prop-types'
import React from 'react'
import { typography } from '../config/typography'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

export class TellImagePicker extends React.Component {
  static propTypes = {
    image: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    aspectRatio: PropTypes.number.isRequired,
    onImagePicked: PropTypes.func.isRequired,
    label: PropTypes.string,
    contentLabel: PropTypes.string,
  }

  onPickImagePress = async () => {
    const pickedImage = await pickImage()

    this.props.onImagePicked(pickedImage)
  }

  renderContent() {
    const { image, width, aspectRatio, contentLabel } = this.props

    if (!image) {
      return (
        <TouchableOpacity
          style={{
            ...styles.container,
            width: width,
            aspectRatio: aspectRatio,
          }}
          activeOpacity={0.8}
          onPress={this.onPickImagePress}
        >
          {contentLabel && (
            <Text style={styles.contentLabel}>{contentLabel}</Text>
          )}
          <PlusIcon />
        </TouchableOpacity>
      )
    }

    return (
      <Image
        source={{ uri: image }}
        borderRadius={4}
        backgroundColor={colors.accentUltraLight}
        resizeMode="cover"
        style={{
          ...styles.image,
          width: width,
          aspectRatio: aspectRatio,
        }}
      />
    )
  }

  render() {
    const { label } = this.props

    return (
      <>
        {label && <Text style={styles.label}>{label}</Text>}
        {this.renderContent()}
      </>
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
  image: {
    borderRadius: 4,
  },
  label: {
    ...typography.labelSmall,
    marginBottom: 8,
  },
  contentLabel: {
    ...typography.labelLarge,
    marginBottom: 16,
  },
})
