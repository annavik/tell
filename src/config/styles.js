import { colors } from './colors'
import { StyleSheet } from 'react-native'
import { typography } from './typography'

export const textInputStyles = StyleSheet.create({
  textInputPlain: {
    width: '100%',
    height: 52,
    backgroundColor: colors.white,
    color: colors.black,
    borderRadius: 4,
    paddingRight: 16,
    paddingLeft: 16,
    marginBottom: 16,
  },
  textInputBorder: {
    width: '100%',
    height: 44,
    backgroundColor: colors.white,
    color: colors.black,
    borderRadius: 4,
    paddingRight: 16,
    paddingLeft: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.accentLight,
  },
  textInputLabel: {
    ...typography.labelSmall,
    marginBottom: 8,
  },
})

export const buttonStyles = StyleSheet.create({
  buttonTiny: {
    width: 'auto',
    height: 32,
    borderRadius: 16,
    paddingRight: 16,
    paddingLeft: 16,
  },
  buttonSmall: {
    width: 'auto',
    height: 44,
    borderRadius: 22,
  },
  buttonMedium: {
    width: '100%',
    height: 44,
    borderRadius: 4,
  },
  buttonLarge: {
    width: '100%',
    height: 52,
    borderRadius: 4,
  },
})
