import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class EditSound extends React.Component {
  static navigationOptions = {
    title: 'Ljud',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Redigera ljud</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
