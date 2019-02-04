import { BookPage } from '../components/BookPage'
import { colors } from '../config/colors'
import { NewPage } from '../components/NewPage'
import { PageListView } from '../components/PageListView'
import PropTypes from 'prop-types'
import React from 'react'
import { Section } from '../components/Section'
import { TellButton } from '../components/TellButton'
import { TellImagePicker } from '../components/TellImagePicker'
import { TellTextInput } from '../components/TellTextInput'
import { typography } from '../config/typography'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

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

  getPageLabelText(pages) {
    if (pages.length > 0) {
      return `Din bok innehåller ${pages.length} ${
        pages.length > 1 ? 'sidor' : 'sida'
      }.`
    }

    return 'Din bok innehåller inga sidor än.'
  }

  render() {
    const { frontPageImage } = this.state

    let pages = [
      {
        key: 'page-0',
        content: <BookPage pageNumber={1} />,
        onPress: () => this.props.navigation.navigate('EditPage'),
      },
      {
        key: 'page-1',
        content: <BookPage pageNumber={2} />,
        onPress: () => this.props.navigation.navigate('EditPage'),
      },
      {
        key: 'page-2',
        content: <BookPage pageNumber={3} />,
        onPress: () => this.props.navigation.navigate('EditPage'),
      },
    ]
    let newBook = { key: 'new-book', content: <NewPage /> }

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.buttonContainer}>
            <TellButton title="Läs" theme="border" onPress={() => {}} />
          </View>
          <View style={styles.space} />
          <View style={styles.buttonContainer}>
            <TellButton title="Spara" theme="border" onPress={() => {}} />
          </View>
        </View>
        <ScrollView>
          <Section title="Framsida">
            <View style={styles.frontPageSection}>
              <TellTextInput theme="border" label="Titel" />
              <TellTextInput theme="border" label="Författare" />
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
            <PageListView pages={[...pages, newBook]} />
            <Text style={styles.pageLabel}>{this.getPageLabelText(pages)}</Text>
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
  space: {
    width: 16,
  },
  frontPageSection: {
    marginTop: 16,
    marginBottom: 32,
    marginLeft: 32,
    marginRight: 32,
  },
  pageLabel: {
    ...typography.labelMedium,
    marginTop: 16,
    marginBottom: 32,
    textAlign: 'center',
  },
})
