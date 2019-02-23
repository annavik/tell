import { colors } from '../config/colors'
import { createStackNavigator } from 'react-navigation'
import { EditBook } from './EditBook'
import { EditPage } from './EditPage'
import { Home } from './Home/Home'
import { MyBooks } from './MyBooks'
import PropTypes from 'prop-types'
import React from 'react'
import { typography } from '../config/typography'

const DashboardNavigator = createStackNavigator(
  {
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

export class Dashboard extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  static router = DashboardNavigator.router

  render() {
    return <DashboardNavigator navigation={this.props.navigation} />
  }
}
