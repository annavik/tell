import { colors } from './colors'
import { StyleSheet } from 'react-native'

export const sharedStyles = StyleSheet.create({
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
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.accentLight,
  },
})
