const firebaseConfig = {
  apiKey: "AIzaSyAxVHI8sX3suG5MKvtPjhzx798QHTXzzEM",
  authDomain: "to-do-329fc.firebaseapp.com",
  projectId: "to-do-329fc",
  storageBucket: "to-do-329fc.appspot.com",
  messagingSenderId: "608107388074",
  appId: "1:608107388074:web:d9815454fa14c0a7da04d3",
  measurementId: "G-WT3PLR68EW",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// let db = firebase.firestore();

// var firebaseConfig = {
//   apiKey: "AIzaSyAxVHI8sX3suG5MKvtPjhzx798QHTXzzEM",
//   authDomain: "to-do-329fc.firebaseapp.com",
//   projectId: "to-do-329fc",
//   storageBucket: "to-do-329fc.appspot.com",
//   messagingSenderId: "08107388074",
//   appId: "11:608107388074:web:d9815454fa14c0a7da04d3",
//   measurementId: "G-WT3PLR68EW",
// };

// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// var db = firebase.firestore();
