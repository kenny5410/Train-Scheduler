
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
  
  var trName = $('#train-name-form').val().trim();
  var trDestination = $('#destination-name-form').val().trim();
  var trFrequency = $('#frequency-form').val().trim();
  var trTime = $('#first-train-time-form').val().trim();

  var newTrain = {
    name: trName,
    destination: trDestination,
    frequency: trFrequency,
    time: trTime
  };
 
  database.ref().push(newTrain);
  
  $('#train-name-form').val("");
  $('#destination-name-form').val("");
  $('#frequency-form').val("");
  $('#first-train-time-form').val("");  
});

database.ref().on("child_added", function(childSnapshot){
  var trName = childSnapshot.val().name;
  var trDestination = childSnapshot.val().destination;
  var trTime = childSnapshot.val().time;
  var trFrequency = childSnapshot.val().frequency;

  var newRow = $("<tr>").append(
    $("<td>").text(trName),
    $("<td>").text(trDestination),
    $("<td>").text(trFrequency),
    $("<td>").text(trTime)
    
  );
  $("#train-table > tbody").append(newRow);
})


