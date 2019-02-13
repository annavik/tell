import firebase from './firebase'

export const signIn = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password)

export const signOut = () => firebase.auth().signOut()

export const signUp = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password)

export const setAuthObservers = (onSignedIn, onSignedOut) => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      onSignedIn(user)
    } else {
      onSignedOut()
    }
  })
}
