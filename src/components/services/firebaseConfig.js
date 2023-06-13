
import { initializeApp } from 'firebase/app'
import { getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyBknlTqxSL4iibXKZlYnBup4yNiPUvtpYQ",
  authDomain: "ecommercereactjs-2d892.firebaseapp.com",
  projectId: "ecommercereactjs-2d892",
  storageBucket: "ecommercereactjs-2d892.appspot.com",
  messagingSenderId: "1007385265082",
  appId: "1:1007385265082:web:a50067e0b7be2563ddd383"
}


const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)