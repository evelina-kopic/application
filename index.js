import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/performance"
import "firebase/compat/messaging"


const firebaseConfig = {
  apiKey: "AIzaSyCrDsi1v40xqAov_ebkIVdcAO9XY8woO3Y",
  authDomain: "prodavnica-romobila-c1880.firebaseapp.com",
  projectId: "prodavnica-romobila-c1880",
  storageBucket: "prodavnica-romobila-c1880.appspot.com",
  messagingSenderId: "540848124670",
  appId: "1:540848124670:web:6d2c40658fd1cd25902baf"
}

firebase.initializeApp(firebaseConfig)
firebase
  .firestore()
  .enablePersistence({ synchronizeTabs: !0 })
  .catch(() => {
    console.warn("DB offline support not available");
  })

export default {
  firestore: firebase.firestore(),
  auth: firebase.auth(),
  firebase: firebase,
  notificationSupported: firebase.messaging.isSupported(),
  messaging: firebase.messaging.isSupported() ? firebase.messaging() : null,
}