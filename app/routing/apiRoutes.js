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
    friendData.push(req.body);
  });

  //added below code to clear out the table while working with the functionality.
  // Empties out the array of data
  app.post("/api/clear", function(req, res) {
    friendData.length = 0;
    res.json({ ok: true });
  });
};
