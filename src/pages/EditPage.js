import { colors } from '../config/colors'
import { createMaterialTopTabNavigator } from 'react-navigation'
import { EditImage } from './EditImage'
import { EditLayout } from './EditLayout'
import { EditSound } from './EditSound'
import { EditText } from './EditText'
import PropTypes from 'prop-types'
import React from 'react'
import { typography } from '../config/typography'

const TabNavigator = createMaterialTopTabNavigator(
  {
    EditLayout: EditLayout,
    EditText: EditText,
    EditImage: EditImage,
    EditSound: EditSound,
  },
  {
    initialRouteName: 'EditImage',
    tabBarOptions: {
      style: {
        backgroundColor: colors.white,
        shadowOpacity: 0,
        borderBottomWidth: 1,
        borderBottomColor: colors.accentLight,
      },
      indicatorStyle: {
        backgroundColor: colors.primary,
        height: 4,
      },
      tabStyle: {
        opacity: 1,
      },
      labelStyle: typography.tabBarLabel,
      activeTintColor: colors.primary,
      inactiveTintColor: colors.accentLight,
    },
  }
)

export class EditPage extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  static navigationOptions = {
    title: 'Redigera sida',
  }

  static router = TabNavigator.router

  render() {
    return <TabNavigator navigation={this.props.navigation} />
  }
}
