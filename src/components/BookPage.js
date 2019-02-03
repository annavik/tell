import { colors } from '../config/colors'
import PropTypes from 'prop-types'
import React from 'react'
import { typography } from '../config/typography'
import { Image, StyleSheet, Text, View } from 'react-native'

export class BookPage extends React.Component {
  static propTypes = {
    pageNumber: PropTypes.number.isRequired,
  }

  render() {
    const { pageNumber } = this.props

    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'http://placekitten.com/160/120' }}
          style={styles.image}
        />
        <Text style={styles.title}>Lorem ipsum dolor sit amet...</Text>
        <View style={styles.pageNumberContainer}>
          <Text style={styles.pageNumber}>{pageNumber}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
  },
  image: {
    width: 160,
    height: 120,
  },
  title: {
    ...typography.labelMedium,
    margin: 16,
    flexGrow: 1,
  },
  pageNumberContainer: {
    width: 64,
    height: 32,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageNumber: {
    ...typography.labelSmall,
    color: colors.white,
  },
})
