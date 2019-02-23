import { Dashboard } from './src/pages/Dashboard'
import { Loading } from './src/pages/Loading'
import { LoginWall } from './src/pages/LoginWall'
import React from 'react'
import { StatusBar } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

const AppNavigator = createSwitchNavigator(
  {
    Loading: { screen: Loading },
    LoginWall: { screen: LoginWall },
    Dashboard: { screen: Dashboard },
  },
  {
    initialRouteName: 'Loading',
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <AppContainer />
      </>
    )
  }
}
