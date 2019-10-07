const config = {
  apiKey: 'AIzaSyCVJyObK2aCRFleRa0-xd1KtQ_BM3tUNC8',
  authDomain: 'portfolio-faed7.firebaseapp.com',
  databaseURL: 'https://portfolio-faed7.firebaseio.com',
  projectId: 'portfolio-faed7',
  storageBucket: 'portfolio-faed7.appspot.com',
  messagingSenderId: '587600286915'
};

firebase.initializeApp(config);
export const db = firebase.firestore();