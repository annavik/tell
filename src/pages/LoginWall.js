import { colors } from '../config/colors'
import { CreateAccount } from './CreateAccount'
import { createStackNavigator } from 'react-navigation'
import { Login } from './Login'
import PropTypes from 'prop-types'
import React from 'react'
import { typography } from '../config/typography'

const LoginWallNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    CreateAccount: { screen: CreateAccount },
  },
  {
    initialRouteName: 'Login',
    cardStyle: { backgroundColor: colors.white },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary,
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        ...typography.labelLarge,
        color: colors.white,
      },
      headerTintColor: colors.white,
      headerBackTitle: null,
    },
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
