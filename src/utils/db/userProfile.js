import firebase from '../firebase'
import { collections, getUserId } from './core'

export const getUserProfile = (onSuccess, onError) => {
  const userId = getUserId()

  if (userId) {
    firebase
      .database()
      .ref(collections.USERS)
      .child(userId)
      .once(
        'value',
        snapshot => {
          const data = snapshot.val() || { firstName: '', lastName: '' }
          onSuccess({ firstName: data.firstName, lastName: data.lastName })
        },
        () => {
          onError(new Error('Could not load profile.'))
        }
      )
  } else {
    onError(new Error('User not authenticated.'))
  }
}

export const setUserProfile = (firstName, lastName) => {
  const userId = getUserId()

  if (userId) {
    return firebase
      .database()
      .ref(collections.USERS)
      .child(userId)
      .set({
        firstName,
        lastName,
      })
  } else {
    throw Error('User not authenticated.')
  }
}

export const setUserProfileObserver = (onSet, onError) => {
  const userId = getUserId()

  if (userId) {
    firebase
      .database()
      .ref(collections.USERS)
      .child(userId)
      .on(
        'value',
        snapshot => {
          const data = snapshot.val() || { firstName: '', lastName: '' }
          onSet({ firstName: data.firstName, lastName: data.lastName })
        },
        () => {
          onError(new Error('Could not load profile.'))
        }
      )
  } else {
    onError(new Error('User not authenticated.'))
  }
}
