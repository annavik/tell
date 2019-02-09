import { colors } from '../config/colors';
import PropTypes from 'prop-types'
import React from 'react'
import { typography } from '../config/typography';
import { StyleSheet, Text, View } from 'react-native'

export class LayoutPage extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }

  render() {
    switch(this.props.id) {
      case 'layout-a':
        return (
          <>
            <View style={{ ...styles.container, padding: 0}}>
              <View style={styles.imageContainer} />
            </View>
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <Text style={typography.layoutLabel}>T</Text>
              </View>
            </View>
          </>
        )
      case 'layout-b':
      return (
        <>
          <View style={{ ...styles.container, paddingBottom: 8 }}>
            <View style={styles.imageContainer} />
          </View>
          <View style={{ ...styles.container, paddingTop: 8 }}>
            <View style={styles.textContainer}>
              <Text style={typography.layoutLabel}>T</Text>
            </View>
          </View>
        </>
      )
      case 'layout-c':
        return (
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={typography.layoutLabel}>T</Text>
            </View>
          </View>
      )
      default:
            return null
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexBasis: '50%',
    padding: 16,
  },
  textContainer: {
    padding: 8,
    backgroundColor: colors.accentUltraLight,
    flex: 1,
  },
  imageContainer: {
    backgroundColor: colors.accentLight,
    flex: 1,
  },
})
