import firebase from './firebase'

const collections = {
  USERS: 'users/',
}

const getUserId = () => firebase.auth().currentUser.uid

export const getUserProfile = onSuccess => {
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
          throw Error('Could not load profile.')
        }
      )
  } else {
    throw Error('User not authenticated.')
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
