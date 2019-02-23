import { PlusIcon } from '../../ui-components/PlusIcon'
import React from 'react'
import { typography } from '../../config/typography'
import { StyleSheet, Text, View } from 'react-native'

export class NewPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Skapa ny sida</Text>
        <PlusIcon />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...typography.labelLarge,
    marginBottom: 16,
  },
})
