import { colors } from '../config/colors'
import React from 'react'
import { typography } from '../config/typography'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export class UserInfo extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.stats}>
          <View style={styles.statsContent}>
            <Text style={styles.statsNumber}>0</Text>
            <Text style={styles.statsLabel}>Böcker</Text>
          </View>
        </View>
        <View style={styles.userInfo}>
          <View style={styles.placeholder}>
            <Text style={styles.placeholderLetter}>A</Text>
          </View>
          <Text style={styles.name}>Anna V.</Text>
        </View>
        <View style={styles.stats}>
          <View style={styles.statsContent}>
            <Text style={styles.statsNumber}>0</Text>
            <Text style={styles.statsLabel}>Favoriter</Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.primary,
    width: '100%',
  },
  stats: {
    flexGrow: 1,
    alignItems: 'center',
  },
  statsContent: {
    width: 64,
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
