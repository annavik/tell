import { colors } from '../config/colors'
import PropTypes from 'prop-types'
import React from 'react'
import { setAuthObservers } from '../utils/auth'
import { typography } from '../config/typography'
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'

export class Loading extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
    const onSignedIn = () => this.props.navigation.navigate('Home') // TODO: Set user
    const onSignedOut = () => this.props.navigation.navigate('LoginWall')

    setAuthObservers(onSignedIn, onSignedOut)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <SafeAreaView style={styles.content}>
          <ActivityIndicator size="large" color={colors.darkGrey} />
        </SafeAreaView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.accentUltraLight,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...typography.labelHuge,
    marginTop: 128,
  },
})
