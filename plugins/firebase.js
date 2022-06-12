import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  measurementID: process.env.FIREBASE_MEASUREMENT_ID
}

const firebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp) // eslint-disable-line

export default ( context, inject ) => {
  inject('firebase', firebaseApp )
}