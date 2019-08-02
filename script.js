var firebaseConfig = {
    apiKey: "AIzaSyDIrzjbb22m8iJZAuUsRqKbeZkhLtTNdoM",
    authDomain: "timesheet-519a6.firebaseapp.com",
    databaseURL: "https://timesheet-519a6.firebaseio.com",
    projectId: "timesheet-519a6",
    storageBucket: "",
    messagingSenderId: "665994249672",
    appId: "1:665994249672:web:36f62a2c5d653332"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
​
​
$('button').on('click', function (event) {
    event.preventDefault();
    var trainName = $('#trainName').val().trim();
    var destination = $('#destination').val().trim();
    var nextTrain = $('#NextTrain').val().trim();
    var frequency = $('#frequency').val().trim();
​
    var con = database.ref('/stn').push({
        TrainName: trainName,
        Destination: destination,
        NextTrain: nextTrain,
        Frequency: frequency
    });
});
​
database.ref('/stn').on('child_added', function (snapshot) {
    var row = $('<tr>');
​
    var trainName = snapshot.val().TrainName;
    var destination = snapshot.val().Destination;
    var nextTrain = snapshot.val().NextTrain;
    var months = 0;
    var frequency = snapshot.val().Frequency;

​
​
    // row.html(name + role + start + rate)
    row.append($('<td>' + trainName + '</td>'));
    row.append($('<td>' + destination + '</td>'));
    row.append($('<td>' + nextTrain + '</td>'));
    row.append($('<td>' + frequency + '</td>'));
    // row.append(col);
​
    $('#tableBody').append(row);
});
