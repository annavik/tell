import { colors } from '../config/colors'
import PropTypes from 'prop-types'
import React from 'react'
import { showAlert } from '../utils/showAlert'
import { TellButton } from '../ui-components/TellButton'
import { textInputStyles } from '../config/styles'
import { getUserProfile, setUserProfile } from '../utils/db'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export class ProfileSettings extends React.Component {
  static navigationOptions = {
    title: 'Profil',
  }

  static propTypes = {
    navigation: PropTypes.object,
  }

  state = {
    firstName: '',
    lastName: '',
  }

  async componentDidMount() {
    try {
      await getUserProfile(userProfile => {
        this.setState({
          firstName: userProfile.firstName,
          lastName: userProfile.lastName,
        })
      })
    } catch (error) {
      showAlert('Något gick fel.', 'Profil kunde inte hämtas.')
    }
  }

  async save() {
    const { firstName, lastName } = this.state

    try {
      await setUserProfile(firstName, lastName)
      this.props.navigation.goBack()
    } catch (error) {
      showAlert('Något gick fel.', 'Profil kunde inte sparas.')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.inputFields}>
            <Text style={textInputStyles.textInputLabel}>Förnamn</Text>
            <TextInput
              style={textInputStyles.textInputBorder}
              placeholderTextColor={colors.darkGrey}
              defaultValue={this.state.firstName}
              onChangeText={text => this.setState({ firstName: text })}
            />

            <Text style={textInputStyles.textInputLabel}>Efternamn</Text>
            <TextInput
              style={textInputStyles.textInputBorder}
              placeholderTextColor={colors.darkGrey}
              defaultValue={this.state.lastName}
              onChangeText={text => this.setState({ lastName: text })}
            />
          </View>
          <TellButton title="Spara" onPress={() => this.save()} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 32,
    flex: 1,
  },
  inputFields: {
    flexGrow: 1,
  },
})
