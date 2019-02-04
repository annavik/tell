import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class EditLayout extends React.Component {
  static navigationOptions = {
    title: 'Layout',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Redigera layout</Text>
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
