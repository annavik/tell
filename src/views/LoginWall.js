import { CreateAccount } from './CreateAccount'
import { createStackNavigator } from 'react-navigation'
import { Login } from './Login'
import { navigationSettings } from '../config/settings'
import PropTypes from 'prop-types'
import React from 'react'

const LoginWallNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    CreateAccount: { screen: CreateAccount },
  },
  {
    initialRouteName: 'Login',
    ...navigationSettings,
  }
)

export class LoginWall extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  static router = LoginWallNavigator.router

  render() {
    return <LoginWallNavigator navigation={this.props.navigation} />
  }
}
