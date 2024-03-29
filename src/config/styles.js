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
