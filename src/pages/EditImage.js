import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class EditImage extends React.Component {
  static navigationOptions = {
    title: 'Bild',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Redigera bild</Text>
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
