import firebase from './firebase'

const collections = {
  USERS: 'users/',
}

const getUserId = () => firebase.auth().currentUser.uid

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
          const data = snapshot.val()
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
          const data = snapshot.val()
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
