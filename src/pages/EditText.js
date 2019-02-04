import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class EditText extends React.Component {
  static navigationOptions = {
    title: 'Text',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Redigera text</Text>
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
