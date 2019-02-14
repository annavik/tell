import { Alert } from 'react-native'

export const showAlert = (title, message) => {
  Alert.alert(title, message, [{ text: 'OK', style: 'cancel' }], {
    cancelable: true,
  })
}
