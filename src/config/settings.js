import { colors } from './colors'
import { typography } from './typography'

export const navigationSettings = {
  cardStyle: { backgroundColor: colors.white },
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.primary,
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      ...typography.labelLarge,
      color: colors.white,
    },
    headerTintColor: colors.white,
    headerBackTitle: null,
  },
}
