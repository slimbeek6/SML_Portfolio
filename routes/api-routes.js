var db = require("../models");

module.exports = function(app) {
    // GET route for getting all of the projects
  app.get("/api/projects/", function(req, res) {
    db.Project.findAll({})
      .then(function(result) {
        res.json(result);
      });
  });
};