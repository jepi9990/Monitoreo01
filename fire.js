var firebase = require('firebase')
// change lines below with your own Firebase snippets!
var config = {

  apiKey: "AIzaSyDG6O214IEnUZ605Vf6nqO_obDbIFCNYgM",
  authDomain: "sensor-pir-4c535.firebaseapp.com",
  databaseURL: "https://sensor-pir-4c535-default-rtdb.firebaseio.com",
  projectId: "sensor-pir-4c535",
  storageBucket: "sensor-pir-4c535.appspot.com",
  messagingSenderId: "883620808645",
  appId: "1:883620808645:web:2093157d427b1536ec2dac",
  measurementId: "G-G7YYS28VJF"
};
const fire = firebase.initializeApp(config);
module.exports = fire;