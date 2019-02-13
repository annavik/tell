import PropTypes from 'prop-types'
import React from 'react'
import { setAuthObservers } from '../utils/auth'

export class Loading extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
    const onSignedIn = () => this.props.navigation.navigate('Home') // TODO: Set user
    const onSignedOut = () => this.props.navigation.navigate('Login')

    setAuthObservers(onSignedIn, onSignedOut)
  }

  render() {
    return null // TODO: Render loading screen
  }
}
