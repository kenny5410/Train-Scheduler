
// Initialize Firebase
  var config = {
  apiKey: "AIzaSyC_bdfZ0FTkXGro6XdVSvxz5uPdQjM92L0",
  authDomain: "ken-train-scheduler.firebaseapp.com",
  databaseURL: "https://ken-train-scheduler.firebaseio.com",
  projectId: "ken-train-scheduler",
  storageBucket: "ken-train-scheduler.appspot.com",
  messagingSenderId: "646081648283"
};
firebase.initializeApp(config);

//variables
var database = firebase.database();



//Click function
$('#submit').on('click', function(event) {
  event.preventDefault();
  
  var name = $('#train-name-form').val().trim();
  var destination = $('#destination-name-form').val().trim();
  var time = $('#first-train-time-form').val().trim();
  var frequency = $('#frequency-form').val().trim();

  database.ref().push({
    name: name,
    destination: destination,
    time: time,
    frequency: frequency
  })
})


