import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyDNSfJq8yAH_gaMjFRddLgYqeLJQO-pb3Y',
  authDomain: 'facebook-clone-b8951.firebaseapp.com',
  projectId: 'facebook-clone-b8951',
  storageBucket: 'facebook-clone-b8951.appspot.com',
  messagingSenderId: '717985145037',
  appId: '1:717985145037:web:e5f5878e6ea338b7b1c984',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

//const storage = firebase.storage()
export { db }
