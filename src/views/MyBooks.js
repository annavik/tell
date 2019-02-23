import { buttonStyles } from '../config/styles'
import { colors } from '../config/colors'
import PropTypes from 'prop-types'
import React from 'react'
import { TellButton } from '../ui-components/TellButton'
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
              buttonStyles={{
                ...buttonStyles.buttonTiny,
                borderWidth: 1,
                backgroundColor: 'transparent',
                marginRight: 8,
              }}
              onPress={() => {}}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TellButton
              title="Ny bok"
              buttonStyles={{
                ...buttonStyles.buttonTiny,
                borderWidth: 1,
                backgroundColor: 'transparent',
                marginLeft: 8,
              }}
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
