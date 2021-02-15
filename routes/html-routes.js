// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models")

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index", {
            title: "Shaun Limbeek | Portfolio Home"
        });
    });

    app.get("/portfolio", async function(req, res) {
        try {
            let findProjs = db.Project.findAll({});
            let [projects] = await Promise.all([findProjs]);
            console.log(projects);
            res.render("portfolio", 
            { title: 'Shaun Limbeek | Portfolio',
              projects: projects
            });
          } catch (error) {
            console.error(error)
          }
    });

    app.get("/contact", function(req, res) {
        res.render("contact", {
            title: "Shaun Limbeek | Contact"
        });
    });

    app.get("/about", function(req, res) {
        res.render("about", {
            title: "Shaun Limbeek | About Me"
        });
    });
};