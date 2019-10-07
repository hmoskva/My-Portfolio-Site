const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'portfolio-faed7.firebaseapp.com',
  databaseURL: 'https://portfolio-faed7.firebaseio.com',
  projectId: 'portfolio-faed7',
  storageBucket: 'portfolio-faed7.appspot.com',
  messagingSenderId: process.env.FIREBASE__MESSAGE_SENDER_ID
};

firebase.initializeApp(config);
export const db = firebase.firestore();