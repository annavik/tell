import { colors } from './colors'
import { StyleSheet } from 'react-native'

export const typography = StyleSheet.create({
  labelSmall: {
    color: colors.black,
    fontSize: 12,
    fontWeight: '700',
  },
  labelMedium: {
    color: colors.black,
    fontSize: 14,
    fontWeight: '700',
  },
  labelLarge: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '600',
  },
  labelHuge: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '700',
  },
})
