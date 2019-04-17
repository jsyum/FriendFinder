// LOAD DATA
var friendData = require("../data/friends");

// ROUTING
module.exports = function(app) {
  // API GET Requests
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // user submits form data (a JSON object) and the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a survey... this data is then sent to the server...
  // Then the server saves the data to the friends array)

  app.post("/api/friends", function(req, res) {
    var userScore = req.body.scores;
    var scoresArray = [];
    var Match = 0;

    for (var i = 0; i < friendData.length; i++) {
      var scoreDifference = 0;
      for (var j = 0; j < userScore.length; j++) {
        scoreDifference += Math.abs(friendData[i].scores[j] - userScore[j]);
      }
      scoresArray.push(scoreDifference);
    }

    // loop through scoresArray
    for (var i = 0; i < scoresArray.length; i++) {
      if (scoresArray[i] <= scoresArray[Match]) {
        Match = i;
      }
    }

    // return best match
    var bestMatch = friendData[Match];
    res.json(bestMatch);
    // friendData.push(req.body);
  });

  //added below code to clear out the table while working with the functionality.
  // Empties out the array of data
  app.post("/api/clear", function(req, res) {
    friendData.length = 0;
    res.json({ ok: true });
  });
};

// var friendScores = friendData.map(friend => friend.scores);
// console.log(friendScores);
