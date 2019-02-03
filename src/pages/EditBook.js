import { colors } from '../config/colors'
import { PageListView } from '../components/PageListView'
import React from 'react'
import { Section } from '../components/Section'
import { TellButton } from '../components/TellButton'
import { TellTextInput } from '../components/TellTextInput'
import { typography } from '../config/typography'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export class EditBook extends React.Component {
  static navigationOptions = {
    title: 'Ny bok',
  }

  render() {
    let pages = [{ key: 'page-0' }, { key: 'page-1' }, { key: 'page-2' }]

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
            <View style={styles.sectionContent}>
              <TellTextInput theme="border" label="Titel" />
              <TellTextInput theme="border" label="Författare" />
            </View>
          </Section>
          <Section title="Sidor" backgroundColor={colors.accentUltraLight}>
            <PageListView pages={pages} />
            <Text style={styles.pageLabel}>
              Din bok innehåller inga sidor än.
            </Text>
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
  sectionContent: {
    marginTop: 16,
    marginBottom: 16,
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
