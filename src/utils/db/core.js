import firebase from '../firebase'

export const collections = {
  USERS: 'users/',
}

export const getUserId = () => firebase.auth().currentUser.uid
