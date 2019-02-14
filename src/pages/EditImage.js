import { colors } from '../config/colors'
import { pickImage } from '../utils/imageHandler'
import React from 'react'
import { TellButton } from '../components/TellButton'
import { TellImagePicker } from '../components/TellImagePicker'
import { typography } from '../config/typography'
import { StyleSheet, Text, View } from 'react-native'

export class EditImage extends React.Component {
  static navigationOptions = {
    title: 'Bild',
  }

  state = {
    hasSupport: true,
    image: null,
  }

  onPickImagePress = async () => {
    const pickedImage = await pickImage()

    this.onImagePicked(pickedImage)
  }

  onRemoveImagePress = () => {
    this.setState({
      ...this.state,
      image: null,
    })
  }

  onImagePicked(image) {
    this.setState({
      ...this.state,
      image: image,
    })
  }

  renderContent() {
    const { hasSupport, image } = this.state

    if (!hasSupport) {
      return (
        <Text style={styles.noSupportLabel}>
          Den layout du har valt innehåller ingen bild.
        </Text>
      )
    }

    const bottomContent = image ? (
      <View style={styles.buttonContainer}>
        <TellButton
          title="Ta bort"
          size="tiny"
          backgroundColor={colors.white}
          color={colors.black}
          onPress={this.onRemoveImagePress.bind(this)}
        />
        <View style={styles.space} />
        <TellButton
          title="Välj ny"
          size="tiny"
          onPress={this.onPickImagePress.bind(this)}
        />
      </View>
    ) : (
      <View style={styles.message}>
        <Text style={typography.messageLabel}>
          Bilden kommer anpassas till format 4:3.
        </Text>
      </View>
    )

    return (
      <>
        <TellImagePicker
          image={image}
          width="100%"
          aspectRatio={4 / 3}
          onImagePicked={this.onImagePicked.bind(this)}
          contentLabel="Ladda upp en bild"
        />
        {bottomContent}
      </>
    )
  }

  render() {
    return <View style={styles.container}>{this.renderContent()}</View>
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
  buttonContainer: {
    padding: 32,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  space: {
    width: 16,
  },
})
