import { colors } from './src/config/colors'
import { CreateAccount } from './src/pages/CreateAccount'
import { EditBook } from './src/pages/EditBook'
import { EditPage } from './src/pages/EditPage'
import { Home } from './src/pages/Home'
import { Login } from './src/pages/Login'
import { MyBooks } from './src/pages/MyBooks'
import React from 'react'
import { StatusBar } from 'react-native'
import { typography } from './src/config/typography'
import { createAppContainer, createStackNavigator } from 'react-navigation'

const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    CreateAccount: { screen: CreateAccount },
    Home: { screen: Home },
    MyBooks: { screen: MyBooks },
    EditBook: { screen: EditBook },
    EditPage: { screen: EditPage },
  },
  {
    initialRouteName: 'Home',
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
