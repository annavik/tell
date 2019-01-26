import { colors } from '../config/colors'
import React from 'react'
import { typography } from '../config/typography'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  stats: {
    flexGrow: 1,
    alignItems: 'center',
  },
  statsNumber: {
    ...typography.labelHuge,
    color: colors.white,
    marginBottom: 8,
  },
  statsLabel: {
    ...typography.labelSmall,
    color: colors.white,
  },
  userInfo: {
    margin: 16,
    alignItems: 'center',
  },
  placeholder: {
    height: 64,
    width: 64,
    borderRadius: 32,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  placeholderLetter: {
    ...typography.labelHuge,
    color: colors.primary,
  },
  name: {
    ...typography.labelMedium,
    color: colors.white,
  },
})

export class UserInfo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.stats}>
          <Text style={styles.statsNumber}>0</Text>
          <Text style={styles.statsLabel}>Böcker</Text>
        </View>
        <View style={styles.userInfo}>
          <View style={styles.placeholder}>
            <Text style={styles.placeholderLetter}>A</Text>
          </View>
          <Text style={styles.name}>Anna V.</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statsNumber}>0</Text>
          <Text style={styles.statsLabel}>Favoriter</Text>
        </View>
      </View>
    )
  }
}
