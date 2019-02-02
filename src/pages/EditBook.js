import { colors } from '../config/colors'
import React from 'react'
import { Section } from '../components/Section'
import { TellButton } from '../components/TellButton'
import { TellTextInput } from '../components/TellTextInput'
import { ScrollView, StyleSheet, View } from 'react-native'

export class EditBook extends React.Component {
  static navigationOptions = {
    title: 'Ny bok',
  }

  render() {
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
            <TellTextInput theme="border" label="Titel" />
            <TellTextInput theme="border" label="Författare" />
          </Section>
          <Section title="Sidor" backgroundColor={colors.accentUltraLight} />
          <Section title="Inställningar" />
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
})
