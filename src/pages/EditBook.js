import { colors } from '../config/colors'
import React from 'react'
import { TellButton } from '../components/TellButton'
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
        <ScrollView />
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
