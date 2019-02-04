import { colors } from '../config/colors'
import { ImagePicker } from '../components/ImagePicker'
import React from 'react'
import { TellButton } from '../components/TellButton'
import { typography } from '../config/typography'
import { Image, StyleSheet, Text, View } from 'react-native'

const editImageState = {
  NO_SUPPORT: 'NO_SUPPORT',
  NO_IMAGE: 'NO_IMAGE',
  HAS_IMAGE: 'HAS_IMAGE',
}

export class EditImage extends React.Component {
  static navigationOptions = {
    title: 'Bild',
  }

  renderNoSupport() {
    return (
      <Text style={styles.noSupportLabel}>
        Den layout du har valt innehåller ingen bild.
      </Text>
    )
  }

  renderNoImage() {
    return (
      <View>
        <ImagePicker
          width="100%"
          aspectRatio={4 / 3}
          label="Ladda upp en bild"
        />
        <View style={styles.message}>
          <Text style={typography.labelMedium}>
            Bilden kommer anpassas till format 4:3.
          </Text>
        </View>
      </View>
    )
  }

  renderHasImage() {
    return (
      <>
        <Image
          source={{ uri: 'http://placekitten.com/600/800' }}
          borderRadius={4}
          backgroundColor={colors.accentUltraLight}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.buttonContainer}>
          <TellButton
            title="Ta bort"
            backgroundColor={colors.white}
            color={colors.black}
            onPress={() => {}}
          />
          <View style={styles.space} />
          <TellButton title="Välj ny" onPress={() => {}} />
        </View>
      </>
    )
  }

  renderContent(state) {
    switch (state) {
      case editImageState.NO_SUPPORT:
        return this.renderNoSupport()
      case editImageState.NO_IMAGE:
        return this.renderNoImage()
      case editImageState.HAS_IMAGE:
        return this.renderHasImage()
      default:
        return null
    }
  }

  render() {
    const state = editImageState.NO_IMAGE

    return <View style={styles.container}>{this.renderContent(state)}</View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  noSupportLabel: {
    ...typography.labelHuge,
    paddingTop: 96,
    textAlign: 'center',
  },
  message: {
    backgroundColor: colors.accentUltraLight,
    padding: 16,
    borderRadius: 4,
    marginTop: 32,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 4 / 3,
  },
  buttonContainer: {
    padding: 32,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  space: {
    width: 16,
  },
})
