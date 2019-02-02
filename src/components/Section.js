import PropTypes from 'prop-types'
import React from 'react'
import { typography } from '../config/typography'
import { StyleSheet, Text, View } from 'react-native'

export class Section extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    children: PropTypes.any,
  }

  render() {
    const { title, backgroundColor, children } = this.props

    let containerStyle = backgroundColor ? { backgroundColor } : {}

    return (
      <View style={containerStyle}>
        <View style={styles.titleContainer}>
          <Text style={typography.labelHuge}>{title}</Text>
        </View>
        <View style={styles.content}>{children}</View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    padding: 16,
  },
  content: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
  },
})
