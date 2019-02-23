import { buttonStyles } from '../../config/styles'
import { BookPage } from './BookPage'
import { colors } from '../../config/colors'
import { NewPage } from './NewPage'
import { PageListView } from '../../ui-components/PageListView'
import PropTypes from 'prop-types'
import React from 'react'
import { Section } from './Section'
import { textInputStyles } from '../../config/styles'
import { TellButton } from '../../ui-components/TellButton'
import { TellImagePicker } from '../../ui-components/TellImagePicker'
import { typography } from '../../config/typography'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

const views = [
  {
    key: 'page-0',
    content: <BookPage pageNumber={1} />,
  },
  {
    key: 'page-1',
    content: <BookPage pageNumber={2} />,
  },
  {
    key: 'page-2',
    content: <BookPage pageNumber={3} />,
  },
]

const newBook = { key: 'new-book', content: <NewPage /> }

export class EditBook extends React.Component {
  static navigationOptions = {
    title: 'Ny bok',
  }

  static propTypes = {
    navigation: PropTypes.object,
  }

  state = {
    frontPageImage: null,
  }

  onImagePicked(image) {
    this.setState({
      ...this.state,
      frontPageImage: image,
    })
  }

  getPageLabelText(views) {
    if (views.length > 0) {
      return `Din bok innehåller ${views.length} ${
        views.length > 1 ? 'sidor' : 'sida'
      }.`
    }

    return 'Din bok innehåller inga sidor än.'
  }

  render() {
    const { frontPageImage } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.buttonContainer}>
            <TellButton
              title="Läs"
              buttonStyles={{
                ...buttonStyles.buttonSmall,
                borderWidth: 1,
                backgroundColor: 'transparent',
                marginRight: 8,
              }}
              labelStyles={{
                colors: colors.white,
              }}
              onPress={() => {}}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TellButton
              title="Spara"
              buttonStyles={{
                ...buttonStyles.buttonSmall,
                borderWidth: 1,
                backgroundColor: 'transparent',
                marginLeft: 8,
              }}
              labelStyles={{
                colors: colors.white,
              }}
              onPress={() => {}}
            />
          </View>
        </View>
        <ScrollView>
          <Section title="Framsida">
            <View style={styles.frontPageSection}>
              <Text style={textInputStyles.textInputLabel}>Titel</Text>
              <TextInput
                style={textInputStyles.textInputBorder}
                placeholderTextColor={colors.darkGrey}
                onChangeText={() => {}}
              />
              <Text style={textInputStyles.textInputLabel}>Författare</Text>
              <TextInput
                style={textInputStyles.textInputBorder}
                placeholderTextColor={colors.darkGrey}
                onChangeText={() => {}}
              />
              <TellImagePicker
                image={frontPageImage}
                width={120}
                aspectRatio={3 / 4}
                onImagePicked={this.onImagePicked.bind(this)}
                label="Bild"
              />
            </View>
          </Section>
          <Section title="Sidor" backgroundColor={colors.accentUltraLight}>
            <View style={styles.pageListContainer}>
              <PageListView
                views={[
                  ...views.map(page => ({
                    ...page,
                    onPress: () => this.props.navigation.navigate('EditPage'),
                  })),
                  newBook,
                ]}
              />
            </View>
            <Text style={styles.pageLabel}>{this.getPageLabelText(views)}</Text>
          </Section>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  top: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    padding: 16,
  },
  buttonContainer: {
    flex: 1,
  },
  frontPageSection: {
    marginTop: 16,
    marginBottom: 32,
    marginLeft: 32,
    marginRight: 32,
  },
  pageListContainer: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  pageLabel: {
    ...typography.labelMedium,
    marginTop: 16,
    marginBottom: 32,
    textAlign: 'center',
  },
})
