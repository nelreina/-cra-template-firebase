import firebase from "firebase/app";
import 'firebase/functions'
import 'firebase/auth'

export const config = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};
// Initialize Firebase
firebase.initializeApp(config);
const functions = firebase.functions();
export const firebaseAuth = firebase.auth();

if (process.env.NODE_ENV === 'development') {
  functions.useFunctionsEmulator('http://localhost:5001')
}
// TODO Workaround to cleanup firebase session
// FIXME Check in future release reactfire if issue is solved 
const clearFirestoreCache = () => {
  // eslint-disable-next-line no-undef
  const map = globalThis['_reactFirePreloadedObservables'];
  Array.from(map.keys()).forEach(
    (key) => key.includes('firestore') && map.delete(key),
  );
};

export const firebaseSignOut = async () => {
  await firebaseAuth.signOut();
  clearFirestoreCache();
}

export const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    // firebase.auth.EmailAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: [
        'https://www.googleapis.com/auth/contacts.readonly'
      ],
      customParameters: {
        // Forces account selection even when one account
        // is available.
        prompt: 'select_account',
        setAllowNewAccounts: false
      }
    },],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
}


// Declare Cloud Functions Callable here
// export const callable = functions.httpsCallable('callable');
