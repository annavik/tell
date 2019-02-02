import { colors } from '../config/colors'
import PropTypes from 'prop-types'
import React from 'react'
import { TellButton } from '../components/TellButton'
import { typography } from '../config/typography'
import { StyleSheet, Text, View } from 'react-native'

export class MyBooks extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  static navigationOptions = {
    title: 'Mina böcker',
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.buttonContainer}>
            <TellButton
              title="Redigera lista"
              theme="border"
              onPress={() => {}}
            />
          </View>
          <View style={styles.space} />
          <View style={styles.buttonContainer}>
            <TellButton
              title="Ny bok"
              theme="border"
              onPress={() => this.props.navigation.navigate('EditBook')}
            />
          </View>
        </View>
        <View style={styles.placeholderContent}>
          <Text style={styles.placeholderLabel}>
            Det finns inga böcker att visa.
          </Text>
          <TellButton
            title="Skapa din första bok!"
            onPress={() => this.props.navigation.navigate('EditBook')}
          />
        </View>
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
  placeholderContent: {
    margin: 64,
    paddingTop: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderLabel: {
    ...typography.labelHuge,
    textAlign: 'center',
    marginBottom: 32,
  },
})
