import { createStackNavigator } from 'react-navigation'
import { EditBook } from './EditBook/EditBook'
import { EditPage } from './EditPage'
import { Home } from './Home/Home'
import { MyBooks } from './MyBooks'
import { navigationSettings } from '../config/settings'
import { ProfileSettings } from './ProfileSettings'
import PropTypes from 'prop-types'
import React from 'react'

const DashboardNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    ProfileSettings: { screen: ProfileSettings },
    MyBooks: { screen: MyBooks },
    EditBook: { screen: EditBook },
    EditPage: { screen: EditPage },
  },
  {
    initialRouteName: 'Home',
    ...navigationSettings,
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
