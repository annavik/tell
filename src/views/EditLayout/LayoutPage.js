import { CheckIcon } from '../../ui-components/CheckIcon'
import { colors } from '../../config/colors'
import PropTypes from 'prop-types'
import React from 'react'
import { typography } from '../../config/typography'
import { StyleSheet, Text, View } from 'react-native'

export class LayoutPage extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    selected: PropTypes.bool,
  }

  getContent(id) {
    switch (id) {
      case 'layout-a':
        return (
          <>
            <View style={{ ...styles.content, padding: 0 }}>
              <View style={styles.imageContainer} />
            </View>
            <View style={styles.content}>
              <View style={styles.textContainer}>
                <Text style={typography.layoutLabel}>T</Text>
              </View>
            </View>
          </>
        )
      case 'layout-b':
        return (
          <>
            <View style={{ ...styles.content, paddingBottom: 8 }}>
              <View style={styles.imageContainer} />
            </View>
            <View style={{ ...styles.content, paddingTop: 8 }}>
              <View style={styles.textContainer}>
                <Text style={typography.layoutLabel}>T</Text>
              </View>
            </View>
          </>
        )
      case 'layout-c':
        return (
          <View style={styles.content}>
            <View style={styles.textContainer}>
              <Text style={typography.layoutLabel}>T</Text>
            </View>
          </View>
        )
      default:
        return null
    }
  }

  render() {
    const { id, selected } = this.props

    const content = this.getContent(id)

    if (!content) {
      return null
    }

    return (
      <View style={styles.container}>
        {content}
        {selected && (
          <View style={styles.selectedContainer}>
            <CheckIcon />
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  content: {
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
  selectedContainer: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
})
